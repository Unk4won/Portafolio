const WaveDivider = ({ flip = false, to = "black" }) => {
  return (
    <div className="w-full overflow-hidden leading-[0]">
      <svg
        className={`w-full h-[100px] ${flip ? "rotate-180" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill={to}
          d="M0,224L40,234.7C80,245,160,267,240,266.7C320,267,400,245,480,224C560,203,640,181,720,192C800,203,880,245,960,261.3C1040,277,1120,267,1200,256C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
