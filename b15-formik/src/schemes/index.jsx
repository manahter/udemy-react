import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email('Geçerli bir email girinization')
        .required('Email girmek zorunludur'),
    age: yup
        .number()
        .positive('Lütfen pozitif bir yaş giriniz')
        .integer('Lütfen yaşınızı tmasayı olarak giriniz')
        .required('Yaş girmek zorunludur'),
    password: yup
        .string()
        .min(5, 'Lütfen minimum 5 karakter giriniz')
        .matches(passwordRules, {
            message: 'Lütfen en az bir büyük harf, bnir küçük harf ve bir sayı giriniz'
        })
        .required("Şifre girmek zorunludur"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Şifreler eşleşmiyor')
        .required('Şifre girmek zorunludur')
})


export const advancedSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Kullanıcı adı minimum 3 karakter uzunluğunda olmalıdır')
        .required('Kullanı adı  girmek zorunludur'),
    university: yup
        .string()
        .oneOf(['bogazici', 'gsu', 'odtu', 'itu'], 'Lütfen üniversitenizi seçiniz')
        .required('Lütfen üniversitenizi seçiniz'),
    isAccepted: yup
        .boolean()
        .oneOf([true], 'Lütfen kullanım koşullarını kabul ediniz')
})