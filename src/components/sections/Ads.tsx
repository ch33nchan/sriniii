import React from 'react';

const Ads = () => {
  return (
    <section id="ads" className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-primary">Advertisements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Ad Engine 1: Google AdSense */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Google AdSense</h3>
          <p>To integrate, sign up at <a href="https://www.google.com/adsense/start/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google AdSense</a> and paste your ad script here.</p>
          {/* 
            Ad script integrated. 
            IMPORTANT: You still need to get your 'data-ad-slot' from your AdSense account and replace 'INSERT_AD_SLOT_HERE' below for the ad to work.
          */}
          <div dangerouslySetInnerHTML={{ __html: `
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5508124348423223"
                 crossorigin="anonymous"></script>
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-5508124348423223"
                 data-ad-slot="INSERT_AD_SLOT_HERE"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
            <script>
                 (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
          ` }} />
        </div>
        
        {/* Ad Engine 2: Media.net */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Media.net</h3>
          <p>To integrate, sign up at <a href="https://www.media.net/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Media.net</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>

        {/* Ad Engine 3: PropellerAds */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">PropellerAds</h3>
          <p>To integrate, sign up at <a href="https://propellerads.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PropellerAds</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>

        {/* Ad Engine 4: Amazon Associates */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Amazon Associates</h3>
          <p>To integrate, sign up at <a href="https://affiliate-program.amazon.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Amazon Associates</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>

        {/* Ad Engine 5: AdThrive */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">AdThrive</h3>
          <p>To integrate, sign up at <a href="https://www.adthrive.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AdThrive</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>

        {/* Ad Engine 6: Ezoic */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Ezoic</h3>
          <p>To integrate, sign up at <a href="https://www.ezoic.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ezoic</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>

        {/* Ad Engine 7: Sovrn */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Sovrn</h3>
          <p>To integrate, sign up at <a href="https://www.sovrn.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sovrn</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>

        {/* Ad Engine 8: Skimlinks */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Skimlinks</h3>
          <p>To integrate, sign up at <a href="https://skimlinks.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Skimlinks</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>

        {/* Ad Engine 9: Monumetric */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Monumetric</h3>
          <p>To integrate, sign up at <a href="https://monumetric.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Monumetric</a> and paste your ad script here.</p>
          <img src="https://via.placeholder.com/300x250" alt="ad placeholder" />
        </div>
      </div>
    </section>
  );
};

export default Ads;
