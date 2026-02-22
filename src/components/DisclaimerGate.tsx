import { useState, useEffect } from "react";

const DisclaimerGate = ({ children }: { children: React.ReactNode }) => {
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("disclaimer_agreed") === "true") {
      setAgreed(true);
    }
  }, []);

  const handleAgree = () => {
    sessionStorage.setItem("disclaimer_agreed", "true");
    setAgreed(true);
  };

  if (agreed) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background p-4">
      <div className="max-w-2xl w-full rounded-lg border border-border bg-secondary p-8 md:p-12 shadow-2xl">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-8 tracking-wide">
          DISCLAIMER AND CONFIRMATION
        </h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-muted-foreground max-h-[50vh] overflow-y-auto pr-2">
          <p>
            Current rules of the Bar Council of India impose restrictions on maintaining a web page and do not permit lawyers to provide information concerning their areas of practice. Pravin Hota is, therefore, constrained from providing any further information on this web page.
          </p>
          <p>
            The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on 'I AGREE', the user acknowledges that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The user wishes to gain more information about Pravin Hota, its practice areas and its attorneys, for his/her own information and use;
            </li>
            <li>
              The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user's volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship; and
            </li>
            <li>
              None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
            </li>
          </ul>
          <p>
            Pravin Hota is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleAgree}
            className="px-10 py-3 bg-primary text-primary-foreground font-semibold text-lg rounded tracking-widest hover:bg-accent transition-colors duration-200"
          >
            I AGREE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerGate;
