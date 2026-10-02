
interface ExpBlockProps {
    children: ReactNode;
}


function ExperienceBlock({children} : ExpBlockProps) {
  return <div>
    <h2>А теперь о моем опыте:</h2>
    <div>
        {children}
    </div>
  </div>
}

export default ExperienceBlock;