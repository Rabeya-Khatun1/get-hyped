
const ExactHypeLogo = () => {
  return (
    <div className="flex items-start justify-center">
      <div className="relative">
        <div 
          className="flex items-center justify-center overflow-visible "
          style={{
            transform: 'perspective(100px) rotateY(-35deg) skewY(-4deg)',
          }}
        >
          <h1 className="text-white font-black flex items-center"
              style={{ 
                fontSize: '20px',
                transform: 'scaleY(1.7)',
                letterSpacing: '-1px',
                lineHeight: '0.9',
                fontWeight: '600',
                fontFamily: "'Bebas Neue', sans-serif",
                
              }}>
            <span className="text-black">GET</span>
            <span className='bg-black text-white px-1 py-0 rounded-tr-[10px] rounded-bl-[2px] rounded-br-[10px] rounded-tl-[2px]'
        
            >
              HYPED
            </span> 
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ExactHypeLogo;