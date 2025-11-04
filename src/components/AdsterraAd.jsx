import React, { useEffect } from 'react';

const AdsterraAd = () => {
    useEffect(() => {
        // Script pertama
        const script1 = document.createElement("script");
        script1.type = "text/javascript";
        script1.innerHTML = `
      atOptions = {
        'key': 'acadec6e92f300b5ce3d6404fcabe0e2',
        'format': 'iframe',
        'height': 60,
        'width': 468,
        'params': {}
      };
    `;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.type = "text/javascript";
        script2.src = "//www.highperformanceformat.com/acadec6e92f300b5ce3d6404fcabe0e2/invoke.js";
        document.body.appendChild(script2);

        // Script ketiga
        const script3 = document.createElement("script");
        script3.src = "//pl27933746.effectivegatecpm.com/fe/61/71/fe617136c8db727af77f3f6156e1cb80.js";
        script3.type = "text/javascript";
        document.body.appendChild(script3);

        // Script keempat
        const script4 = document.createElement("script");
        script4.async = true;
        script4.dataset.cfasync = "false";
        script4.src = "//pl27933673.effectivegatecpm.com/23c2579805c55be1ea4163aa2f201d8c/invoke.js";
        document.body.appendChild(script4);

        return () => {
            // Hapus script biar gak duplikat saat re-render
            document.body.removeChild(script1);
            document.body.removeChild(script2);
            document.body.removeChild(script3);
            document.body.removeChild(script4);
        };
    }, []);

    return (
        <div id="container-23c2579805c55be1ea4163aa2f201d8c" style={{ marginTop: "20px" }}></div>
    );
};

export default AdsterraAd;
