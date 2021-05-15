import classes from './Loan.module.css';

const Loan = (props) => {
  return (
    <div className={classes.loanBox}> 
        <div className={classes.loanDetails}>
            <div>
                <h3>Rs {props.amount}</h3>
                <h4>{props.start_date.substring(0,10)} - {props.expiry_date.substring(0,10)}</h4>
            </div>
            <div>
                <p>Emi  - Rs {props.emi}/month</p>
                <h5>{props.type} Interest</h5>
            </div>
        </div>
        <div className={classes.userDetails}>
            <p>Applicant name - {props.name}</p>
            <p>Email - {props.email}</p>
            <p>Address - {props.email}</p>
            <p>Contact - {props.contact}</p>
        </div>
    </div>
  );
};

export default Loan;