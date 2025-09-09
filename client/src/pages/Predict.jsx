import React, { useState } from "react";
export default function Predict() {
  const [formdata, setformdata] = useState({});
  const [gotprice, setgotPrice] = useState(false);
  const [estimatedPrice, setestimatedPrice] = useState("");
  const [error, seterror] = useState(null);
  const locations = [
    "1st block jayanagar",
    "1st phase jp nagar",
    "2nd phase judicial layout",
    "2nd stage nagarbhavi",
    "5th block hbr layout",
    "5th phase jp nagar",
    "6th phase jp nagar",
    "7th phase jp nagar",
    "8th phase jp nagar",
    "9th phase jp nagar",
    "aecs layout",
    "abbigere",
    "akshaya nagar",
    "ambalipura",
    "ambedkar nagar",
    "amruthahalli",
    "anandapura",
    "ananth nagar",
    "anekal",
    "anjanapura",
    "ardendale",
    "arekere",
    "attibele",
    "beml layout",
    "btm 2nd stage",
    "btm layout",
    "babusapalaya",
    "badavala nagar",
    "balagere",
    "banashankari",
    "banashankari stage ii",
    "banashankari stage iii",
    "banashankari stage v",
    "banashankari stage vi",
    "banaswadi",
    "banjara layout",
    "bannerghatta",
    "bannerghatta road",
    "basavangudi",
    "basaveshwara nagar",
    "battarahalli",
    "begur",
    "begur road",
    "bellandur",
    "benson town",
    "bharathi nagar",
    "bhoganhalli",
    "billekahalli",
    "binny pete",
    "bisuvanahalli",
    "bommanahalli",
    "bommasandra",
    "bommasandra industrial area",
    "bommenahalli",
    "brookefield",
    "budigere",
    "cv raman nagar",
    "chamrajpet",
    "chandapura",
    "channasandra",
    "chikka tirupathi",
    "chikkabanavar",
    "chikkalasandra",
    "choodasandra",
    "cooke town",
    "cox town",
    "cunningham road",
    "dasanapura",
    "dasarahalli",
    "devanahalli",
    "devarachikkanahalli",
    "dodda nekkundi",
    "doddaballapur",
    "doddakallasandra",
    "doddathoguru",
    "domlur",
    "dommasandra",
    "epip zone",
    "electronic city",
    "electronic city phase ii",
    "electronics city phase 1",
    "frazer town",
    "gm palaya",
    "garudachar palya",
    "giri nagar",
    "gollarapalya hosahalli",
    "gottigere",
    "green glen layout",
    "gubbalala",
    "gunjur",
    "hal 2nd stage",
    "hbr layout",
    "hrbr layout",
    "hsr layout",
    "haralur road",
    "harlur",
    "hebbal",
    "hebbal kempapura",
    "hegde nagar",
    "hennur",
    "hennur road",
    "hoodi",
    "horamavu agara",
    "horamavu banaswadi",
    "hormavu",
    "hosa road",
    "hosakerehalli",
    "hoskote",
    "hosur road",
    "hulimavu",
    "isro layout",
    "itpl",
    "iblur village",
    "indira nagar",
    "jp nagar",
    "jakkur",
    "jalahalli",
    "jalahalli east",
    "jigani",
    "judicial layout",
    "kr puram",
    "kadubeesanahalli",
    "kadugodi",
    "kaggadasapura",
    "kaggalipura",
    "kaikondrahalli",
    "kalena agrahara",
    "kalyan nagar",
    "kambipura",
    "kammanahalli",
    "kammasandra",
    "kanakapura",
    "kanakpura road",
    "kannamangala",
    "karuna nagar",
    "kasavanhalli",
    "kasturi nagar",
    "kathriguppe",
    "kaval byrasandra",
    "kenchenahalli",
    "kengeri",
    "kengeri satellite town",
    "kereguddadahalli",
    "kodichikkanahalli",
    "kodigehaali",
    "kodigehalli",
    "kodihalli",
    "kogilu",
    "konanakunte",
    "koramangala",
    "kothannur",
    "kothanur",
    "kudlu",
    "kudlu gate",
    "kumaraswami layout",
    "kundalahalli",
    "lb shastri nagar",
    "laggere",
    "lakshminarayana pura",
    "lingadheeranahalli",
    "magadi road",
    "mahadevpura",
    "mahalakshmi layout",
    "mallasandra",
    "malleshpalya",
    "malleshwaram",
    "marathahalli",
    "margondanahalli",
    "marsur",
    "mico layout",
    "munnekollal",
    "murugeshpalya",
    "mysore road",
    "ngr layout",
    "nri layout",
    "nagarbhavi",
    "nagasandra",
    "nagavara",
    "nagavarapalya",
    "narayanapura",
    "neeladri nagar",
    "nehru nagar",
    "ombr layout",
    "old airport road",
    "old madras road",
    "padmanabhanagar",
    "pai layout",
    "panathur",
    "parappana agrahara",
    "pattandur agrahara",
    "poorna pragna layout",
    "prithvi layout",
    "r.t. nagar",
    "rachenahalli",
    "raja rajeshwari nagar",
    "rajaji nagar",
    "rajiv nagar",
    "ramagondanahalli",
    "ramamurthy nagar",
    "rayasandra",
    "sahakara nagar",
    "sanjay nagar",
    "sarakki nagar",
    "sarjapur",
    "sarjapur  road",
    "sarjapura - attibele road",
    "sector 2 hsr layout",
    "sector 7 hsr layout",
    "seegehalli",
    "shampura",
    "shivaji nagar",
    "singasandra",
    "somasundara palya",
    "sompura",
    "sonnenahalli",
    "subramanyapura",
    "sultan palaya",
    "tc palaya",
    "talaghattapura",
    "thanisandra",
    "thigalarapalya",
    "thubarahalli",
    "thyagaraja nagar",
    "tindlu",
    "tumkur road",
    "ulsoor",
    "uttarahalli",
    "varthur",
    "varthur road",
    "vasanthapura",
    "vidyaranyapura",
    "vijayanagar",
    "vishveshwarya layout",
    "vishwapriya layout",
    "vittasandra",
    "whitefield",
    "yelachenahalli",
    "yelahanka",
    "yelahanka new town",
    "yelenahalli",
    "yeshwanthpur",
  ];

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setgotPrice(true);
      const res = await fetch("/predict_home_price", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setgotPrice(false);
        seterror(data.message);
        return;
      }
      if (data.estimated_price < 0) {
        setgotPrice(false);
        seterror(
          "Make the valid choice of bhks, bathrooms with respect to the area"
        );
        return;
      }
      setgotPrice(true);
      setestimatedPrice(data.estimated_price);
      seterror(null);
    } catch (error) {
      setgotPrice(false);
      seterror(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Estimate the Price (Banglore)
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter Area(in sqft)"
          className="border p-3 rounded-lg"
          id="total_sqft"
          value={formdata.total_sqft}
          onChange={handleChange}
        />
        <select
          className="border p-3 rounded-lg"
          id="location"
          value={formdata.location}
          onChange={handleChange}
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter BHK"
          className="border p-3 rounded-lg"
          id="bhk"
          value={formdata.bhk}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Bathrooms"
          className="border p-3 rounded-lg"
          id="bath"
          value={formdata.bath}
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Get Price
        </button>
        {gotprice && (
          <h1 className="bg-slate-500 text-2xl text-white p-3  text-center rounded-lg hover:opacity-95">
            {estimatedPrice} lacs
          </h1>
        )}
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
