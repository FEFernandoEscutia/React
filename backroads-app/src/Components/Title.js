const Title = ({ title1, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title1} <span>{subTitle}</span>
      </h2>
    </div>
  );
};
export default Title;
