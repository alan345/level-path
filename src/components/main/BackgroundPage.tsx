type Props = {
  children: React.ReactNode;
};
const BackgroundPage = (props: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#EFF8E7] via-[#CEDBC9] to-[#F9FFEF]">
      {props.children}
    </div>
  );
};

export default BackgroundPage;
