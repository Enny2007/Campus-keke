import logo from "../assets/icon/keke-icon.jpg";

const Footer = () => {
  return (
    <>
  <footer className="bg-slate-900 text-white py-4">
    <div className="container mx-auto text-center">
      <div className="flex flex-row  gap-2 mx-auto items-center justify-center ">
      <img src={logo} alt="CampusKeke Logo" className="w-8 h-8 mb-2 rounded-md" />
      <h3 className="text-lg font-semibold">CampusKeke</h3>
      </div>
      <p className="text-sm">&copy; 2026 CampusKeke. Making campus transportation easy and accessible.</p>
      
    </div>
  </footer>
</>
  );
};

export default Footer;

