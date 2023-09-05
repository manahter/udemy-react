import { Formik, Form } from 'formik'
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemes';
import CustomSelect from './CustomSelect';
import CustomCheckBox from './CustomCheckBox';
import { Link } from 'react-router-dom';

// Form submit olduğunda çalışır
const onSubmit = async (values, actions) => {
  console.log(values)
  console.log(actions)

  // 1sn boyunca tekrar submit olmasına izin vermez
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  })

  // Formu temizler
  actions.resetForm();
}

const PortalForm = () => {
  return (
    <>
      <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        // örneğin username'in belli kurallara uymasını istiyoruz. Bunun için oluşturduğumuz kurallar şemasını giriyoruz
        validationSchema={advancedSchema}
      >

        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adınızı giriniz"
            />


            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Lütfen üniversitenizi seçiniz"
            >
              <option value="">Lütfen üniversitenizi seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtu">ODTÜ</option>
              <option value="itu">İTÜ</option>
            </CustomSelect>


            <CustomCheckBox
              type="checkbox"
              name="isAccepted"
            />


            <button disabled={isSubmitting} type='submit'>Kaydet</button>

             
            <Link to='/' className='formLink'>
              Ana Forma Git
            </Link>
          </Form>
        )}

      </Formik>
    </>
  )
}

export default PortalForm