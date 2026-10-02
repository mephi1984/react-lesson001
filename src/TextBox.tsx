import "./TextBox.css"

interface WorkDataProps {
    name: string;
    years: number;
    onClick: () => void;
}

function TextBox({name, years, onClick} : WorkDataProps) {
  return <p className="my-text-box">У меня {years} лет опыта в {name} <button
      type="button"
      onClick={onClick}
    >
      Проверь
    </button></p>;
}

export default TextBox;