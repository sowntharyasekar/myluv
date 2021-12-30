import React from "react";
import "../admin/background.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

const Aboutus = () => {
    const user = useSelector(selectUser);
    const { t, i18n } = useTranslation();
  return (
    <div class="container-fluid bg-dark shadow text-white font-italic p-5 m-4">
     
      <h3>{t('Your Name:')}<span class="text-success p-2">{user.name}</span></h3>
      <h3>{t('Your Email:')}<span class="text-success p-2">{user.email}</span></h3>
      <h1 class=" text-success text-center pt-4">{t('FoodZone')}</h1>
      <div class="row p-5">
        <div class="col-md-6 text-monospace">
          <p>
           {t('para1')}</p>
            <p> 
              {t('para2')}
          </p>
        </div>
        <div class="col-md-6 text-monospace">
          <p>
           {t('para3')}
            </p><p> {t('para4')}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
