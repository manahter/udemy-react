import { useField } from 'formik'

function CustomCheckBox({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <>
            <div className='checkBox'>
                <input
                    {...field}
                    {...props}
                    className={meta.error ? 'input-error' : ''}
                />
                <span>Kullanım Koşullarını Kabul Ediyorum</span>
            </div>
            {meta.error && <div className='error'>{meta.error}</div>}
        </>
    )
}

export default CustomCheckBox;