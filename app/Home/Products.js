import Transparentbtn from "../components/Transparentbtn";

import "./Products.css";
function Industries() {
  const products = [
    {
      imageSrc: "/Assets/Home/product1.svg",
      description: "Fertilizers",
      text: "Urea • DAP • MAP",
    },
    {
      imageSrc: "/Assets/Home/product2.svg",
      description: "Solvents",
      text: "White Spirit • Xylene • Toluene",
    },
    {
      imageSrc: "/Assets/Home/product3.svg",
      description: "Glycols",
      text: "MEG • TEG • DEG",
    },
    {
      imageSrc: "/Assets/Home/product4.svg",
      description: "Oil & Gas",
      text: "Petroleum • Gas Oil • Gasoline",
    },
  ];
  return (
    <div className="Industries" id="Industries">
      <div>
        <p className="Heading">our products</p>
        <p className="Heading2">Products with which we are great</p>
      </div>
      <div className="IndustriesContainer">
        {products.map((industry, index) => (
          <div
            className="Industrycard"
            key={index}
            style={{ backgroundImage: `url(${industry.imageSrc})` }}
          >
            <div className="IndustrycardDescription">
              <p>{industry.description}</p>
              <div>
                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "300",
                    color: "FFFFFF",
                  }}
                >
                  {industry.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Transparentbtn TbtnText="VIEW ALL PRODUCTS" href="/Products" />
    </div>
  );
}

export default Industries;
