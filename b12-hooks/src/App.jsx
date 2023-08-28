import React, {
  useReducer,
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
  useTransition
} from 'react'
import './App.css'
import Calculate from './Calculate';
import NumberList from './NumberList';
import useTitle from './useTitle';
import useInput from './useInput';


// Verileri, diğer komponentlerde kullanabilmemizi sağlayacak bir Context tanımlıyoruz
export const NumberContext = React.createContext();


// Başlangıç değeri
const initialValue = 0;

// state -> değerimizdir,
// action -> eylem tipimiz
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialValue;
    default:
      return state;
  }
}


function App() {
  // useState
  const [dark, setDark] = useState(false);



  // useState'in biraz daha özelliklisi olarak düşünebiliriz
  // İçine fonksiyon verebiliyoruz
  const [count, dispatch] = useReducer(reducer, initialValue);



  // ------------------------------------------------------------------------------------------------
  // useMemo
  // Sadece "count" değeri değiştiğinde slowFunc'i çalıştır diyoruz.
  // Böylece, gereksiz yere işlem yapılmamış olur
  // Dikkat!!!: useMemo'da bir değer döndürülür.
  const doubleNumber = useMemo(() => {
    return slowFunc(count);
  }, [count])

  function slowFunc(num) {
    // İşlemi bilinçi olarak 2 saniye geciktiriyoruz.
    console.log('Fonksiyon çağırıldı');
    for (let i = 0; i <= 2000000000; i++) { }
    return num * 2;
  }



  // ------------------------------------------------------------------------------------------------
  // useCallback 
  // Sadece "count" değeri değiştiğinde işlemi yap diyoruz.
  // Böylece, gereksiz yere işlem yapılmamış olur
  const getItems = useCallback((incrementValue) => {
    return [count + incrementValue, count + 1 + incrementValue, count + 2 + incrementValue];
  }, [count]);



  // ------------------------------------------------------------------------------------------------
  // useRef - 1
  // useRef değiştiğinde, komponentler tekrar render edilmez. Böyle bir avantajı var
  const renderCount = useRef(0);

  // Herhangi bir kompoenent değiştiğinde çalışır
  useEffect(() => {
    // Herhangi bir kompoenent her dğeiştiğinde, render edilir yani render sayısını tutuyooruz.
    // Eğer useREf kullanmamış olsaydık: renderCount her değiştiğinde tekrar tekrar render loopa girecekti
    renderCount.current = renderCount.current + 1;
  })



  // ------------------------------------------------------------------------------------------------
  // useRef - 2
  // Input'a useRef sayesinde erişebiliyoruz. 
  // Random değer atarken, "count" değişkenini de kullanıyoruz ama 
  // count sonradan değiştiğinde, input değişmiyor. Çünkü useRef kullandık !?!
  const inputRef = useRef("");

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    inputRef.current.value = Math.floor(count * Math.random() * 1000);
  }



  // ------------------------------------------------------------------------------------------------
  // useTransition                                  --> Bunun yerine useDefferedValue kullanılabilir.
  // Bir işlemde önceliği belirlerken kullanılır.
  // Örneğin bir input var ve inputtan alınan girdi var. 
  // Bu girdiden 2000 tane ekrana bastıracağız
  // Ama bu girdilerin ekrana basılmasını beklerken, inputun içinde gecikme oluyor. 
  // Bun gecikmemin önüne geçmek için kullanabiliriz. Yani işlem önceliğini öteleriz
  const [inputVal, setInputVal] = useState('')
  const [myList, setMyList] = useState([])
  const [isPending, startTransition] = useTransition();
  // Buradaki 
  // isPending -> boolean'dır
  // startTransition -> kullanacağımız fonksiyondur
  const handleChange = (e) => {
    setInputVal(e.target.value);

    // Diğer işlemlerde gecikmeye sebep olmasın diye, asıl işlemimizi öteliyoruz.
    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 100; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    })
  }

  // ------------------------------------------------------------------------------------------------
  // CustomHook - 1
  const [num, setNum] = useState(0)
  // Sadece bu şekilde kullanılmasını sağlıyoruz.
  // Aşağıda tanımladığımız butona tıkladıkça, otomatik olarak sayfanın sekmesindeki numara değişecek
  useTitle(num);
  

  // ------------------------------------------------------------------------------------------------
  // CustomHook - 2
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('');



  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  }


  useEffect(() => {
    console.log
  }, [count])


  return (
    <>
      <NumberContext.Provider value={{ count: count, dispatch: dispatch }}>
        <Calculate />
      </NumberContext.Provider >
      <br />
      <hr />

      {/* Butona bastığımızda, tema rengi değişiyor. 
      Ama tema değişirken gereksiz yere slowFunc çalışıyor.
      Tema ile doubleNumber değişkeni ilişiksiz olduğu için, temayı değişirken slowFunc çağırılmasına gerek yok
      bu durumda useMemo kullanılır.
      */}
      <button onClick={() => setDark((prevDark) => !prevDark)} >Temayı değiştir</button>
      <hr />


      {/* useMemo */}
      <div style={theme}>~~~ useMemo Örneği ~~~</div>
      <div style={theme}>İki katı = {doubleNumber}</div>
      <hr />


      {/* useCallback */}
      <NumberList style={theme} getItems={getItems} />
      <hr />


      {/* useRef - 1*/}
      <div>~~~ useRef Örneği - 1 ~~~</div>
      <div>Render count = {renderCount.current}</div>
      <hr />


      {/* useRef - 2*/}
      <div>~~~ useRef Örneği - 2 ~~~</div>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={focusInput}>Input'a Random Değer Ata</button>
      <hr />


      {/* useTransition */}
      <div>~~~ useTransition Örneği ~~~</div>
      <input type="text" value={inputVal} onChange={handleChange} />
      <div className='transitionDiv'>
        {
          isPending ?
            <span>Yükleniyor...</span> :
            myList.map((item, index) => {
              return <span key={index}>{item}</span>
            })
        }
      </div>
      <hr />


      {/* CutomHook - 1 */}
      <div>~~~ CustomHook Örneği - useTitle ~~~</div>
      <button onClick={() => setNum((prev) => prev + 1)} >Sayı = {num}</button>
      <hr />


      {/* CutomHook - 2 */}
      <div>~~~ CustomHook Örneği - useInput ~~~</div>
      <form onSubmit={(e) => {
        // Sayfa açılırken gereksiz çalışmasın diye
        e.preventDefault();
        alert(`Merhaba ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
      }}>
        <label htmlFor="">Ad</label>
        <input type="text" {...bindFirstName} />
        <label htmlFor="">Soyad</label>
        <input type="text" {...bindLastName} />
        <button type='submit' onClick={() => setNum((prev) => prev + 1)} >Kaydet</button>
      </form >
      <hr />

    </>
  )
}



export default App
