import React from 'react';
import Img_logo from '../images/image.jpg';
import { Link }  from 'react-router-dom';
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaEnvelope, FaChartLine, FaCode, FaCodeBranch} from 'react-icons/fa';

export default () => (
  <div id="header-top-bar">
    <div class="container">
     <div class="row">
      <ul class="top-bar-contact">
      <li>
      <a href="tel:+1 613-260-9999">
      <i class="fa fa-phone">
      </i>+1 613-260-9999</a></li>

      <li>
      <a href="https://maps.google.com/?q=2950+bank+street,+Ottawa+K1T1N8" target="_blank">
      <i class="fa fa-map-marker">
      </i>2950 bank street, Ottawa K1T1N8</a></li>
      </ul>

      <div class="top-bar-social">
      <a href="https://www.facebook.com/blossomsalonspa2950bankstreet/?__tn__=%2Cd%2CP-R&amp;eid=ARD7T8zZA4aA2o-CqBip5ZRmMVMOo4f4U4Db1lLykTfAk6JL6R62wS-e3Ta3R8FySvSqUFLMbeXmYiwB" target="_blank">
      <i class="fa fa-facebook"></i></a>

      <a href="#" target="_blank">
      <i class="fa fa-twitter"></i></a>

      <a href="#" target="_blank">
      <i class="fa fa-linkedin"></i></a>

      <a href="https://instagram.com/blossomsalonspa.2950bank.st?igshid=t7fcm1u2zzf9" target="_blank">
      <i class="fa fa-instagram"></i></a>

      <a href="#" target="_blank">
      <i class="fa fa-google-plus"></i></a>

      <a href="#" target="_blank">
      <i class="fa fa-youtube"></i></a>
      </div>
    </div>
  </div>
</div>
);
