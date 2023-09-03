import Banner from '../assets/banner.png'
import "../styles/Contact.css"

export const Contact = () => {
  return (
    <div className='contact'>

      <div
        className='leftSide'
        style={{ backgroundImage: `url(${Banner})` }}
      >

      </div>
      <div
        className='rightSide'
      >
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label htmlFor="">Ad Soyad</label>
          <input type="text" name='name' placeholder='Lütfen adınızı soyadını giriniz...' />
          <label htmlFor="">E-Mail</label>
          <input type="text" name='email' placeholder='Lütfen e-mailinizi soyadını giriniz...' />
          <label htmlFor="">Mesajınız</label>
          <textarea type="text" name='message' rows="6" placeholder='Lüfen mesajınızı soyadını giriniz...' />
        </form>
      </div>

    </div>
  )
}
