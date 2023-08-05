interface Props {
  title: string;
  classStyles: string;
}

const Button = ({ title, classStyles }: Props) => {
  return (
    <div
      className={`py-2 px-4 bg-ether-grey-2 rounded-lg text-white cursor-pointer text-sm font-semibold ${
        classStyles ? classStyles : ""
      }`}
    >
      {title}
    </div>
  );
};

export default Button;
