import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import styles from './PrivacyPolicyPage.module.scss'


function PrivacyPolicyPage() {
  return <div className={styles.privacy_policy}>
      <div className={styles.privacy_back}>
        <Link to="/">
        <FontAwesomeIcon icon={faChevronCircleLeft} size="5x" className={styles.privacy_policy_chevron_left}/>
        </Link>
            
            <span>To main</span>
      </div>
      <h2>Privacy Policy</h2>
      <p>At Restaurant GOOSY.OK, we are committed to protecting your privacy as an online visitor to our website. We use the information we collect about you to maximize the services that we provide to you. We respect the privacy and confidentiality of the information provided by you and adhere to the Ukrainian Privacy Principles. Please read our privacy policy below carefully.</p>
      <p>You may change your details at any time by advising us in writing via email. All information we receive from our customers is protected by our secure server. Restaurant GOOSY.OK secure server software encrypts all customer information before it is sent to us. Furthermore, all customer data collected is secured against unauthorized use or access. Credit card information is not stored by us on our servers.</p>
      <h3>STORAGE AND SECURITY OF YOUR INFORMATION</h3>
      <p>We receive and store information you enter on our website or give us in any other way from time to time. You may provide basic contact information such as your name, date of birth, phone number, address, and email address to enable us to send information or process your product order and we may also collect additional information at other times, including but not limited to, when you provide feedback, change your content or email preferences, respond to a survey, or communicate with our customer support.</p>
      <p>We may use personal information collected from you for the purpose of providing you with direct marketing material, updates regarding our website and information in the form of a newsletter. This will only apply if you have registered or subscribed to such publications by registering your details with us. However, if you wish to cease receiving any such information you may let us know either by email or unsubscribing at any time and your request will be actioned immediately.</p>
      <p>Individual profile and company details are not used for any other purpose. Details are only supplied to a third party supplier when it is required by law, for goods or services which you have purchased or to protect our copyright, trademarks and other legal rights.</p>
      <p>We respect the privacy of our online visitors. We may collect information on or through this website that can personally identify you. For example, we collect personally identifiable information which you volunteer to us to respond to visitor questions and comments about us and our products and services, and to mail e-newsletters (“Personal Data”).</p>
      <p>We will use all reasonable means to protect the confidentiality of your Personal Data while in our possession or control. We will not knowingly share any of your Personal Data with any third party other than our service providers who assist us in providing the information and/or services we are providing to you. To the extent that we do share your personal information with a service provider, we would only do so if that party has agreed to comply with our privacy standards as described in this privacy policy. Some of our service providers may be overseas and may not be subject to Australian Privacy Laws. Please contact us if you require specific details.</p>
      <p>Any non-personal information, communications and material you send to this website or to us by email, or which we obtain from third parties without promises of confidentiality, may be kept, used and disclosed by us on a non-confidential basis. We are free to use and reproduce any such information freely, and for any purpose whatsoever. Specifically, we will be free to use any ideas, concepts, know-how or techniques contained in such information for any purpose, including developing, manufacturing or marketing products.</p>
      <h3>COOKIES</h3>
      <p>A cookie is a small file placed in your web browser that collects information about your web browsing behaviour. Use of cookies allows a website to tailor its configuration to your needs and preferences. Cookies do not access information stored on your computer or any personal information (e.g. name, address, email address or telephone number). Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. This may, however, prevent you from taking full advantage of our website.</p>
      <p>Our website uses cookies to analyse website traffic and help us provide a better website visitor experience. In addition, cookies may be used to serve relevant ads to website visitors through third party services such as Google Adwords. These ads may appear on this website or other websites you visit.</p>
      <h3>DISCLOSURE OF YOUR INFORMATION</h3>
      <p>We may from time to time need to disclose certain information, which may include your Personal Data, to comply with a legal requirement, such as a law, regulation, court order, subpoena, warrant, in the course of a legal proceeding or in response to a law enforcement agency request. Also, we may use your Personal Data to protect the rights, property or safety of Restaurant GOOSY.OK, our customers or third parties.</p>
      <p>If there is a change of control in one of our businesses (whether by merger, sale, transfer of assets or otherwise) customer information, which may include your Personal Data, could be disclosed to a potential purchaser under a confidentiality agreement. We would only disclose your information in good faith and where required by any of the above circumstances.</p>
      <h3>THIRD PARTIES</h3>
      <p>We do not and will not sell or deal in personal or customer information. We will never disclose your personal details to a third party except the necessary information required by providers of products or services you have purchased or to protect the rights, property or safety of Restaurant GOOSY.OK, our customers or third parties or if required by law.</p>
      <p>We may however use in a general sense without any reference to your name, your information to create marketing statistics, identify user demands and to assist it in meeting customer needs generally. In addition, we may use the information that you provide to improve our website and services but not for any other use.</p>
      <h3>SECURITY</h3>
      <p>We strive to ensure the security, integrity and privacy of personal information submitted to our website, and we periodically update our security measures in light of current technologies.</p>
      <h3>LINKS</h3>
      <p>This website may contain links to other websites. These links are meant for your convenience only. Links to third party websites do not constitute sponsorship or endorsement or approval of these websites. Please be aware that we are not responsible for the privacy practices of such other websites. We encourage our users to be aware, when they leave our website, to read the privacy statements of each and every website that collects personally identifiable information. This privacy policy applies solely to information collected by this website.</p>
      <h3>CHANGE IN PRIVACY POLICY</h3>
      <p>As we plan to ensure our privacy policy remains current, this policy is subject to change. We may modify this policy at any time, in our sole discretion and all modifications will be effective immediately upon our posting of the modifications on this website. Please return periodically to review our privacy policy.</p>
      <p>If you have any questions or concerns at any time about our privacy policy or the use of your personal information, please contact us at admin@restaurantgoosyok.com with "Att: Privacy Officer" in the subject and we will respond within 48 hours.</p>      
  </div>
}

export default PrivacyPolicyPage;
