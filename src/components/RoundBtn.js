
const RoundBtn = (props) => {
    return (
        <button
            className={` ${props.isBgPurple ? "bg-primary text-white" : "bg-white text-primary"}  rounded-full px-[32px] py-[12px] text-[14px] font-bold`}
        >
            Get Started
        </button>
    );
}

export default RoundBtn

