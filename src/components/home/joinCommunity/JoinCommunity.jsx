const JoinCommunity = () => {
  return (
    <section className="py-16 sc-join flex items-center bg-join-image relative after:absolute after:content-[''] after:bg-gradient-to-b after:from-black/50 after:to-black/50 after:bg-center after:bg-cover after:bg-no-repeat">
      <div className="container w-full">
        <div className="join-content">
          <h2 className="join-title uppercase">
            join the <span>community</span>
          </h2>
          <p className="lead-text py-2">
            Join our Discord community which is in the making and made by gamers
            for gamers. All are welcome to join no matter the game you play,
            we're here to have a good.
          </p>
          <button type="button" className="section-btn mt-4">
            join discord
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
