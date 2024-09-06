import { faqs } from './../../assets/data/faqs';
import FaqItem from './FaqItem';
import faqImg from './../../assets/images/pngtree-portrait.png';
const FaqList = () => {
  return (
    <section>
      <div className="container max-w-full w-[1440px] px-5 mx-auto mt-14">
        <div className="flex justify-between gap-[50px] lg:gap-60px">
          <div className="w-6/12 md:w-1/2">
            <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent heading font-semibold text-5xl">
              Most questions by our beloved patients
            </h2>
            <ul className="mt-[38px]">
              {faqs.map((item, index) => (
                <FaqItem item={item} key={index} />
              ))}
            </ul>
          </div>
          <div className="w-6/12 hidden md:block">
            <img className="w-full" src={faqImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqList;
