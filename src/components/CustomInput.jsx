import PropTypes from 'prop-types';


export const CustomInput = ({ register , label , errors , errLabel , name , type="text" })=>{

    return (
        <>
            <label className="form-label">{label}</label>
            <input className="form-control" type={type}   {...register(name, { required: true })} />
                {
                    errors.firstName?.type === 'required' 
                    &&  <small className="text-danger ">{errLabel}</small>
                }
        </>
    );
       
};
CustomInput.propTypes = {
    register: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    errors: PropTypes.object,
    errLabel: PropTypes.string.isRequired
}
