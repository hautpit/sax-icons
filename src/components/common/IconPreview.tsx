interface Props {
  name: string;
  icon: React.ReactNode;
}

const IconPreview = (props: Props) => {
  const { name, icon } = props;
  return (
    <div className="icon-preview">
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default IconPreview;
