import "./Box.css"

function Box({color="red", key}) {
    return (
      <>
        <div 
        className="Box"
        key={key}
        style={{
            backgroundColor: color,
            width: '100px',
            height: '100px'
      }}
    />
      </>
    );
  }
  
  export default Box;
  