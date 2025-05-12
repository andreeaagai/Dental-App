import React from 'react';
import './Prices.css';

const Prices = () => {

    const servicii = [
        { nume: "Albire dentara profesionala cu LASER", pret: "2.300" },
        { nume: "Aparat dentar invizibil advanced (nelimitat gutiere)", pret: "20.000" },
        { nume: "Aparat dentar invizibil MINI (10-12 gutiere)", pret: "9.500" },
        { nume: "Aparat dentar invizibil one (20-24 gutiere)", pret: "14.200" },
        { nume: "Aparat dentar metalic / arcada", pret: "2.500" },
        { nume: "BRIGHT & SHINE (Detartraj ultrasunete, periaj profesional, air flow)", pret: "600" },
        { nume: "Consult medic specialist", pret: "GRATUIT" },
        { nume: "Consultatie implantologie (examen clinic, interpretare imagistica, plan de tratament personalizat)", pret: "GRATUIT" },
        { nume: "Coroană metalo-ceramică", pret: "1.700" },
        { nume: "Coroana pe implant zirconiu suprem", pret: "2.000" },
        { nume: "Coroana Zirconiu regular", pret: "1.700" },
        { nume: "Dinti ficsi 4", pret: "12.000" },
        { nume: "Dinti ficsi 6", pret: "15.600" },
        { nume: "Dinti ficsi 8", pret: "17.700" },
        { nume: "Fatete dentare Emax", pret: "3.200" },
        { nume: "Fateta EMAX (Digital Smile design) PREMIUM", pret: "4.000" },
        { nume: "Implant dentar premium", pret: "de la 2.000" },
        { nume: "Inlay / Onlay", pret: "1.200" },
        { nume: "Lucrare definitiva metalo- ceramica – 12 dinti", pret: "15.000" },
        { nume: "Lucrare definitiva metalo- ceramica 10 DINTI", pret: "12.000" },
        { nume: "Lucrare definitiva pe implant titan compozit/ arcada", pret: "17.000" },
        { nume: "Lucrare definitiva pe implanturi zirconiu/titan", pret: "25.000" },
        { nume: "Lucrare provizorie dinti ficsi acrilat", pret: "2.000" },
        { nume: "Lucrare provizorie dinti ficsi pmma", pret: "de la 2.550" },
        { nume: "Obturatie (carie) cavitate", pret: "de la 397" },
        { nume: "Proteza acrilica clasica", pret: "1.700" },
        { nume: "Proteza Capse", pret: "4.500" },
        { nume: "Retratament endodontic dinte cu configuratie anatomica speciala, sub control microscopic (molar de minte)", pret: "1.800" },
        { nume: "Retratament endodontic dinte monoradicular realizat sub control microscopic (include obturatia de canal)", pret: "1.300" },
        { nume: "Retratament endodontic dinte pluriradicular realizat sub control microscopic (include obturatiia de canal)", pret: "1.500" },
        { nume: "Sedare constienta", pret: "de la 1.500" },
        { nume: "Tratament LASER afte bucale/herpes", pret: "250" },
        { nume: "Tratament de urgenta (accidente/traumatisme, abcese, infectii, drenaj endodontic)", pret: "250" },
        { nume: "Tratament endodontic dinte cu configuratie anatomica speciala, sub control microscopic (molar de minte)", pret: "1.700" },
        { nume: "Tratament endodontic dinte monoradicular realizat sub control microscopic (include obturatia de canal)", pret: "950" },
        { nume: "Tratament endodontic dinte pluriradicular realizat sub control microscopic (include obturatia de canal)", pret: "1.200" },
      ];

    return (
        <div className="preturi-container">
            <h1>Lista de prețuri</h1>
            <p className="disclaimer">
            * Prețurile sunt orientative și pot varia în funcție de complexitatea cazului.
            </p>

            <div className="tabel-preturi">
                <table>
                    <thead>
                        <tr>
                            <th>Serviciu</th>
                            <th>Preț (RON)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servicii.map((serviciu, index) => (
                            <tr key={index}>
                                <td>{serviciu.nume}</td>
                                <td>{serviciu.pret}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Prices;