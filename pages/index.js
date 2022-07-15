import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import hero from "../assets/hero.png";
import icon from "../assets/icon.png";
import Fill from "../assets/Fill.png";
import usdt from "../assets/usdt.png";
import usdc from "../assets/usdc.png";
import busd from "../assets/busd.png";
import dia from "../assets/dia.png";
import icon2 from "../assets/icon2.png";
import arrow from "../assets/Vector.png";

const style = {
  heroContainer: "flex flex-row w-screen",
  heroPhoto: "w-[510px] h-[497px] ml-[50px] mt-[100px]",
  detailContainer:
    "w-[419.41px] h-[312.56px] pt-[70px] pl-[70px] rounded-[35.82px] bg-white/5 fles flex-col ml-[100px]",
  featuresContainer: "flex flex-row pr-[100px] pb-[100px] justify-between",
  heading2: "text-3xl font-bold mt-[10px] py-[50px]",
  listHeader:
    "flex flex-row space-x-80 mt-[10px] mr-[370px] text-3xl font-bold ",
  listContainer:
    "flex flex-col justify-center justify-between items-center bg-white/5 rounded-[35.82px] mx-[100px] my-[100px] py-[50px]",
  usdt: "flex flex-row space-x-80 mt-[50px]",
  dia: "flex flex-row space-x-80 mt-[50px]",
  busd: "flex flex-row space-x-80  mt-[50px]",
  usdc: "flex flex-row space-x-80 mt-[50px]",
  hero2: "",
  hero2First: "flex flex-col py-[50px] ml-[120px]",
  hero2second: "flex flex-col py-[50px] ml-[120px]",
  firstFooter:
    "flex flex-row justify-center items-center space-x-96 bg-[#5b7cf1]/20 my-[50px] py-[100px]",
  footer: "flex flex-row text-white space-x-60 ml-[120px] pb-[50px]",
  mainFaq:
    "flex flex-col mx-[100px] bg-white mb-[100px] mt-[20px] rounded-[20px] bg-[#1e1e1e]",
  mainT: " flex flex-row space-x-10 my-[50px] mx-[80px]",
  mainB: "flex flex-row space-x-20 mb-[50px] mx-[65px]",
  faqIntro: "ml-[110px] mt-[50px]",
};

export default function Home() {
  return (
    <>
      <div className="">
        <div className="flex flex-row justify-between mr-[50px]">
          <div className="flex-grow-0 flex-shrink-0 w-[127px] h-[42px] ml-[60px] mt-[20px] flex flex-row">
            <p className="">
              <span className=" left-0 top-[31.5px] text-3xl font-bold text-left text-[#5b7cf1]">
                READY
              </span>
              <spam className="left-[200px] top-[24.5px] text-[35px] font-medium text-left text-white">
                fi
              </spam>
            </p>
          </div>
          <div className="mt-[37px] flex-grow-0 ml-[100px] flex-shrink-0 h-[22px] flex flex-row">
            <div className=" text-xl font-bold text-white ml-[100px] space-x-40 flex flex-row justify-between">
              <a href="#detailContainer" className="mx-4">
                {" "}
                ABOUT
              </a>
              <a href="#listContainer" className="mx-4">
                {" "}
                EARN
              </a>
              <a href="#faq" className="mx-4">
                FAQs
              </a>
            </div>
          </div>
          <div className="ml-[250px] mt-[20px] flex justify-start item-center flex-grow-0 flex-shrink-0 gap-5 px-[50px] py-2.5 rounded-[30px] bg-white/5 border-[1.5px] border-[#5b7cf1]">
            <a
              href="https://t.me/+OHmaQPauelFiYjhk"
              className="flex-grow-0 flex-shrink-0 text-[26px] text-left text-[#5b7cf1]"
            >
              JOIN COMMUNITY
            </a>
          </div>
        </div>
        <div className={style.heroContainer}>
          <div className={style.heroContent}>
            <div className="flex justify-center items-center w-[800px] h-[122px] ml-[10px] mt-[100px] gap-[22.529510498046875px]">
              <p className="flex-grow-0 flex-shrink-0 text-[90.1180419921875px] text-left">
                <span className="flex-grow-0 flex-shrink-0 text-[60px] text-left text-white">
                  GROW YOUR
                </span>
                <span className="flex-grow-0 flex-shrink-0 text-[60px] text-left text-[#111]">
                  {" "}
                </span>
                <span className="flex-grow-0 flex-shrink-0 text-[60px] text-left text-white">
                  USDT
                </span>
              </p>
              <Image
                src={usdt}
                width={84}
                height={84}
                className="flex-grow-0 flex-shrink-0 mt-[50px] object-cover"
              />
            </div>
            <div>
              <p className="ml-[110px] mt-[10px] text-[22.529510498046875px] font-medium text-left text-[#c4c4c4]">
                <span className="text-[22.529510498046875px] font-medium text-left text-[#c4c4c4]">
                  Earn safe DeFi yields across alll your favorite stable
                </span>
                <br />
                <span className="text-[22.529510498046875px] font-medium text-left text-[#c4c4c4]">
                  tokens.
                </span>
              </p>
            </div>
            <div className="w-[613px] h-[478.5px] mt-[40px]">
              <div className="w-[506.69px] h-[118.11px]">
                <div className="flex justify-center items-center ml-[180px] gap-[22.529510498046875px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left text-white">
                    Earn additional interests when you trade.
                  </p>
                </div>
                <div className="flex justify-center items-center ml-[125px] gap-[22.529510498046875px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left">
                    <span className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left text-[#5b7cf1]">
                      100%
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left text-white">
                      {" "}
                      impermanent Loss Protection.
                    </span>
                  </p>
                </div>
                <div className="flex justify-center items-center ml-[168px] gap-[22.529510498046875px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left">
                    <span className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left text-white">
                      Deposit only{" "}
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left text-[#5b7cf1]">
                      stable
                    </span>
                    <span className="flex-grow-0 flex-shrink-0 text-[22.529510498046875px] font-medium text-left text-white">
                      {" "}
                      coins to reduce loss.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center w-[157.71px] h-[54px] ml-[100px] mt-[30px] gap-2.5 px-[30px] py-2.5 rounded-[33.79px] bg-white/5 border-[1.69px] border-[#5b7cf1]">
                <a
                  href="https://t.me/+OHmaQPauelFiYjhk"
                  className="flex-grow-0 flex-shrink-0 text-[26px] text-left text-[#5b7cf1]"
                >
                  JOIN{" "}
                </a>
              </div>
            </div>
          </div>
          <div className={style.heroPhoto}>
            <Image src={hero} alt="hero-photo" />
          </div>
        </div>
        <div className={style.featuresContainer}>
          <div className={style.detailContainer}>
            <div className="w-[283px] h-[211.21px]">
              <Image
                src={Fill}
                alt="icon"
                width={39}
                height={44}
                className="mt-[5px]"
              />
              <p className="text-3xl text-left font-bold text-white">STAKING</p>
              <p className="w-[283px] h-[106px]  text-xl font-medium text-left text-[#c4c4c4]">
                <span className="w-[283px] h-[106px] text-xl font-medium text-left text-[#c4c4c4]">
                  Deposit one token, stay exposed to one token. Earn with 100%
                  upside exposure.
                </span>
              </p>
            </div>
          </div>

          <div id="detailContainer" className={style.detailContainer}>
            <div className="w-[283px] h-[211.21px]">
              <Image
                src={Fill}
                alt="icon"
                width={39}
                height={44}
                className="mt-[5px]"
              />
              <p className="text-3xl text-left font-bold text-white">
                AUTO-COMPOUNDING
              </p>
              <p className="w-[283px] h-[106px]  text-xl font-medium text-left text-[#c4c4c4]">
                <span className="w-[283px] h-[106px] text-xl font-medium text-left text-[#c4c4c4]">
                  Interest earned on READYfi is automatically re-invested,
                  auto-compounding your gains as you go.
                </span>
              </p>
            </div>
          </div>

          <div className={style.detailContainer}>
            <div className="w-[283px] h-[211.21px]">
              <Image
                src={Fill}
                alt="icon"
                width={39}
                height={44}
                className="mt-[5px]"
              />
              <p className="text-3xl text-left font-bold text-white">
                REFERAL-BONOUS
              </p>
              <p className="w-[283px] h-[106px]  text-xl font-medium text-left text-[#c4c4c4]">
                <span className="w-[283px] h-[106px] text-xl font-medium text-left text-[#c4c4c4]">
                  Earn 1-7% on referral bonuses every time you refer a new
                  community member.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={style.heading2}>
          <p className="text-2xl font-medium text-center text-white">
            Deposit a single token and maintain 100% upside exposure while
            earning fees and rewards.
          </p>
        </div>

        <div id="listContainer" className={style.listContainer}>
          <div className={style.listHeader}>
            <p className="text-[#c4c4c4]">TOKEN</p>
            <p className="text-[#c4c4c4]">EARN</p>
          </div>
          <div className={style.usdt}>
            <div className="flex flex-row space-x-2">
              <Image src={usdt} alt="usdt" width={40} height={40} />
              <p className="text-white">USDT</p>
            </div>
            <p className="text-white">2.5%</p>
            <a
              href="https://t.me/+OHmaQPauelFiYjhk"
              className="text-white py-[5px] px-[5px] bg-[#5b7cf1] rounded-[8px] text-center"
            >
              Deposit
            </a>
          </div>
          <div className={style.dia}>
            <div className="flex flex-row space-x-4">
              <Image src={dia} alt="usdt" width={40} height={40} />
              <p className="text-white">DAI</p>
            </div>
            <p className="text-white">2.5%</p>
            <a
              href="https://t.me/+OHmaQPauelFiYjhk"
              className="text-white  py-[5px] px-[5px] bg-[#5b7cf1] rounded-[8px] text-center "
            >
              Deposit
            </a>
          </div>
          <div className={style.busd}>
            <div className="flex flex-row space-x-2">
              <Image src={busd} alt="usdt" width={40} height={40} />
              <p className="text-white">BUSD</p>
            </div>
            <p className="text-white">2.5%</p>
            <a
              href="https://t.me/+OHmaQPauelFiYjhk"
              className="text-white py-[5px] px-[5px] rounded-[8px] text-center bg-[#5b7cf1]"
            >
              Deposit
            </a>
          </div>
          <hr className="w-[1212] h-[1px] bg-white"></hr>
          <div className={style.usdc}>
            <div className="flex flex-row space-x-2">
              <Image src={usdc} alt="usdt" width={40} height={40} />
              <p className="text-white">USDC</p>
            </div>
            <p className="text-white">2.5%</p>
            <a
              href="https://t.me/+OHmaQPauelFiYjhk"
              className="text-white py-[5px] px-[5px] bg-[#5b7cf1] rounded-[8px] text-center "
            >
              Deposit
            </a>
          </div>
        </div>

        <div className={style.hero2}>
          <div className={style.hero2First}>
            <p className=" text-white text-5xl pb-[20px]">AN ORGANIC ECONOMY</p>
            <div className=" text-[#c4c4c4] space-y-[5px]">
              <p className="text-xl font-medium text-left text-[#c4c4c4]">
                Join our organic growing community of highly influential
              </p>
              <p className=" text-xl font-medium text-left text-[#c4c4c4]">
                tight -knit individuals, all ready to onboard.
              </p>
            </div>
            <div className=" bg-[#5b7cf1] flex flex-row items-center rounded-full justify-start mr-[1080px] mt-[60px]">
              <a
                href="https://t.me/+OHmaQPauelFiYjhk"
                className="text-[26px] text-white my-2 ml-[30px]"
              >
                JOIN COMMUNITY{" "}
              </a>
              <div className="ml-4 mt-2">
                <Image src={arrow} width={22} height={15} />
              </div>
            </div>
          </div>

          <div className={style.hero2second}>
            <p className=" text-white text-3xl pb-[20px]">
              KNOW MORE ABOUT OUR COMMUNITY
            </p>
            <div className=" text-[#c4c4c4] space-y-[5px]">
              <p className="text-xl font-medium text-left text-[#c4c4c4]">
                Get to know more about the intricacies of our community
              </p>
              <p className=" text-xl font-medium text-left text-[#c4c4c4]">
                from our frequently asked questions.
              </p>
            </div>
          </div>
        </div>

        <div id="faq" className={style.faqIntro}>
          <p className="text-white text-2xl font-bold">FAQ</p>
          <p className="text-white">Have any questions? we're here to help</p>
        </div>

        <div>
          <div className={style.mainFaq}>
            <div className={style.mainT}>
              <div className="text-white py-[10px]">
                <Image src={icon2} width={32} height={32} />
                <p className="text-xl">How do I know how much to deposit?</p>
                <div className="mt-[10px]">
                  READYfi has three (3) Plans available for staking deposits.
                  <br />
                  <p className="font-bold mt-[15px]">
                    -The Starter Plan: $500 - $9999
                  </p>
                  <br />
                  <p className="font-bold">
                    {" "}
                    -The Professional Plan: $10,000 - $29,999
                  </p>
                  <br />
                  <p className="font-bold">
                    -The Master Plan: $30,000 - $200,000
                  </p>
                </div>
              </div>
              <div className="text-white py-[10px]">
                <Image src={icon2} width={32} height={32} />
                <p className="text-xl">How often do I get my profits back?</p>
                <div className="mt-[10px]">
                  Payment of interests for all individual Plans are done DAILY.
                  <br />
                  <p className="font-bold mt-[15px]">
                    -The Starter Plan: 2% daily profits
                  </p>
                  <br />
                  <p className="font-bold">
                    -The Professional Plan: 3% daily profits
                  </p>
                  <br />
                  <p className="font-bold">
                    -The Master Plan: 4% daily profits
                  </p>
                </div>
              </div>
              <div className="text-white py-[10px]">
                <Image src={icon2} width={32} height={32} />
                <p className="text-xl">How do I receive my profits?</p>
                <p className="font-bold mt-[10px]">
                  All profits gotten or earned are sent straight
                  <br />
                  to your designated wallet provided for your stable tokens.
                </p>
              </div>
            </div>
            <div className={style.mainB}>
              <div className="text-white py-[10px]">
                <Image src={icon2} width={32} height={32} />
                <p className="text-xl">How do I get referral bonuses?</p>
                <div className="mt-[10px]">
                  Referral bonuses are earned every time you refer
                  <br />
                  a new community member to deposit.
                  <br />
                  These bonuses are earned according
                  <br />
                  to subscribed plans of the new user.
                  <br />
                  <p className="font-bold mt-[15px]">
                    -The Starter Plan: 7% referral bonus
                  </p>
                  <br />
                  <p className="font-bold">
                    -The Professional Plan: 10% referral bonus
                  </p>
                  <br />
                  <p className="font-bold">
                    -The Master Plan: 15% referral bonus
                  </p>
                  <br />
                </div>
              </div>
              <div className="text-white py-[10px]">
                <Image src={icon2} width={32} height={32} />
                <p className="text-xl">How long does a profit cycle last?</p>
                <p className="mt-[10px] font-bold">
                  Your profit cycle per deposit, lasts for 20 weeks
                  <br />
                  in which profits would be paid back daily.
                </p>
              </div>
            </div>

            <div className="bg-[#5b7cf1]/20 mx-[30px] mb-[50px] flex flex-row py-[20px] pl-[30px] rounded-[10.32px] text-white">
              <div>
                <p className="font-bold">Still have questions ?</p>
                <p className="text-[13px]">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>

              <div className="bg-[#5b7cf1] ml-[650px] rounded-[10px] justify-center items-center">
                <a
                  href="https://t.me/+OHmaQPauelFiYjhk"
                  className="px-[15px] py-[5px] mt-1"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={style.firstFooter}>
          <div>
            <p className="text-white text-2xl font-bold">STAY UPDATED</p>
            <p className="text-[#c4c4c4]">
              Get alpha information straight to you.
            </p>
          </div>

          <form className="flex flex-row bg-white px-4 py-2 rounded-full space-x-60">
            <input
              placeholder="Entrt Email"
              type="text"
              className=" ml-4 mt-1 font-bold text-black outline-0"
            />
            <button
              type="submit"
              className=" text-white px-[10px] py-[2px] my-[10px] mx-[10px] bg-[#5b7cf1] rounded-[10px]"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className={style.footer}>
          <div className=" mt-[20px] flex flex-row">
            <p>
              <span className="  text-3xl font-bold text-left text-[#5b7cf1]">
                READY
              </span>
              <spam className="text-[35px] font-medium text-left text-white">
                fi
              </spam>
            </p>
          </div>

          <div className="flex flex-row space-x-60">
            <div className={style.products}>
              <p className="text-2xl font-bold">PRODUCTS</p>
              <div>
                <p>Auto Compounding</p>
                <p>Staking</p>
                <p>Lending</p>
              </div>
            </div>

            <div className={style.learn}>
              <p className="text-2xl font-bold">LEARN</p>
              <div>
                <p>Knowledge Base</p>
                <p>Staking Guide</p>
                <p>Blog</p>
              </div>
            </div>

            <div className={style.community}>
              <p className="text-2xl font-bold">COMMUNITY</p>
              <div className="flex flex-col">
                <a href="https://t.me/+OHmaQPauelFiYjhk">Telegram</a>
                <a href="https://t.me/+OHmaQPauelFiYjhk">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
