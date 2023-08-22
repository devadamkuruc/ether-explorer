import {
  HeroSection,
  RecentBlocks,
  RecentTransactions,
  Searchbar,
  WalletBanner,
} from "@/components";

const Home = () => {
  return (
    <div className=" flex-col flexCenter px-28 py-4">
      <div className="flexBetween w-full mt-14 gap-28">
        <Searchbar />
        <WalletBanner />
      </div>

      <div className="w-full flex justify-center flex-col mt-16">
        <HeroSection />

        <div className="flex gap-6 mt-16">
          <RecentTransactions />
          <RecentBlocks />
        </div>
      </div>
    </div>
  );
};

export default Home;
