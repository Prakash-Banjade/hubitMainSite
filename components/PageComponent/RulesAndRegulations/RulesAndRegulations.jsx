import React from "react";
const RulesAndRegulationsText = [
  {
    desc: `HE/She should will be responsible for any damage done to the
     property owned by the institution  and will be charged accordingly.`,
  },
  {
    desc: `Half of the fee should be paid within first week and remaining 
    should be paid by the end second week. Fees are not refundable.`,
  },
  {
    desc: `Students should inform to the institution if he/she will not 
     be able to attend any class.`,
  },
  {
    desc: `It is compulsory to attend any extra clases,seminars,field visits
     and internships and other programs that institution sees fot to deploy 
     any student with respective to their course & firls of intrest`,
  },
  { desc: " Certificate will not be provided for incomplete courses" },
];
function RulesAndRegulations(setClickedCheckBox) {
  return (
    <div className="mb-10">
      <div className="bg-main w-full p-2 rounded-t-xl mb-5 Poppins tracking-widest text-center uppercase text-2xl  text-white font-medium">
        Rules And Regulations:
      </div>
      <div className="px-8">
        {RulesAndRegulationsText.map((val, i) => {
          return (
            <div key={i} className="flex gap-2 my-1 Poppins ">
              <div>{i + 1}.</div>
              <div>{val.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RulesAndRegulations;
