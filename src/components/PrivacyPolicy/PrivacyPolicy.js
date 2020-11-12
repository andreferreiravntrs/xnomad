import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './PrivacyPolicy.css';

const PrivacyPolicy = props => {
  const { rootClassName, className } = props;
  const classes = classNames(rootClassName || css.root, className);

  // prettier-ignore
  return (
    <div className={classes}>
      <p className={css.lastUpdated}>Last Updated: May 15, 2019</p>

      <p>
      This Privacy Policy describes how we collect, use, process, and disclose your information, including personal information, in connection with your access to and use of the xNomad Platform. If you see an undefined term in this Privacy Policy (such as “Listing” or “xNomad Platform”), it has the same definition as in our Terms of Service.
      When this policy mentions “xNomad,” “we,” “us,” or “our,” it refers to Nomadic Retail AB), the company that is responsible for your information under this Privacy Policy (the “Data Controller”).
      </p>

      <h2>1. INFORMATION WE COLLECT</h2>
      <p>There are three general categories of information we collect.</p>
      <p>
        <strong>1.1 Information you gave us</strong> <br/>
        1.1.1 Information that is necessary for the use of the xNomad Platform.<br/>
        We ask for and collect certain personal information about you when you use the xNomad Platform. 
        This information is necessary for the adequate performance of the 
        contract between you and xNomad and to allow us to comply with our legal obligations. 
        Without it, we may not be able to provide you with all of the requested services.<br/>

        <span className={css.dot}>
        <strong>Account Information.</strong> When you sign up for a xNomad Account, we require 
        certain information such as your name, company name, email address, and phone number.
        </span>
        <span className={css.dot}>
        <strong>Profile and Listing Information.</strong> To use certain features of the xNomad Platform 
        (such as booking or creating a Listing), we may ask you to provide additional 
        information, such as your address or phone number.
        </span>
        <span className={css.dot}>
        <strong>Identity Verification Information</strong> To create and maintain a trusted environment, 
        we may collect identity verification information or other authentication 
        information, such as your date of birth.
        </span>
        <span className={css.dot}>
        <strong>Communications with xNomad and other users.</strong> When you communicate 
        with xNomad or use the xNomad Platform to communicate with others, we collect 
        information about your communication and any information you choose to 
        provide.
        </span>
        <span className={css.dot}>
        <strong>Payment Information</strong> To use certain features of the xNomad Platform (such as 
        booking or creating a Listing), we may require you to provide certain financial 
        information (like your bank account or credit card information) in order to facilitate the processing
         of payments and to comply with applicable law (such as 
         anti-money laundering regulations). Without it, you may not be able to use the 
         Platform to book or rent out space.
        </span>

        <strong>1.1.2 Information you choose to give us.</strong><br/>
        You may choose to provide us with additional personal information in order to obtain a 
        better user experience when using xNomad Platform. This additional information will be 
        processed based on your consent.

        <span className={css.dot}>
        <strong>Additional Profile Information</strong> You may choose to provide additional 
        information as part of your xNomad profile (such as preferred language(s) or 
        descriptions of your brand and/or space).
        </span>
        <span className={css.dot}>
        <strong>Other Information</strong> You may otherwise choose to provide us information when you
         fill in a form, conduct a search, update or add information to your xNomad Account, 
         respond to surveys, or use other features of the xNomad Platform.
        </span>

        <strong>1.2 Information We Automatically Collect from Your Use of the xNomad Platform.</strong><br/>
        When you use the xNomad Platform, we automatically collect information, 
        including personal information, about the services you use and how you use them. 
        This information is necessary for the adequate performance of the contract between you and us, 
        to enable us to comply with legal obligations and pursuant to our legitimate interest in being able 
        to provide and improve the functionalities of the xNomad Platform.

        <span className={css.dot}>
        <strong>Usage Information</strong> We collect information about your interactions with the 
        xNomad Platform such as the pages or content you view, your searches for Listings,
        bookings you have made, and other actions on the xNomad Platform.
        </span>
        <span className={css.dot}>
        <strong>Log Data and Device Information</strong> We automatically collect log data and device 
        information when you access and use the xNomad Platform, even if you have not created a 
        xNomad Account or logged in. That information includes, among other things: details about 
        how you’ve used the xNomad Platform (including if you clicked on links to third party applications), 
        IP address, access dates and times, hardware and software information, device information, 
        device event information, unique identifiers, crash data, cookie data, and the pages you’ve 
        viewed or engaged with before or after using the xNomad Platform.
        </span>
        <span className={css.dot}>
        <strong>Cookies and Similar Technologies</strong> We use cookies and other similar technologies, 
        such as web beacons, pixels, and mobile identifiers. We may also allow our business partners to 
        use these tracking technologies on the xNomad Platform, or engage others to track your behavior on 
        our behalf. While you may disable the usage of cookies through your browser settings, it may affect 
        your ability to log in to your account and use the Site. The xNomad Platform currently does not 
        respond to a “Do Not Track” signal in the HTTP header from your browser or mobile application 
        due to lack of standardization regarding how that signal should be interpreted.
        </span>

        <strong>1.3 Information We Collect from Third Parties.</strong><br/>
        xNomad may collect information, including personal information, that others provide about you 
        when they use the xNomad Platform, or obtain information from other sources and combine that 
        with information we collect through the xNomad Platform and the Payment Services. 
        We do not control, supervise or respond for how the third parties providing your 
        information process your personal data, and any information request regarding the disclosure 
        of your personal information to us should be directed to such third parties.

        <span className={css.dot}>
        <strong>Social Sign In</strong> If you link, connect, or login to your xNomad Account with a 
        social networking site such as Facebook, Facebook may send us information such as your 
        registration and profile information from that service. This information varies and is 
        controlled by that Facebook and/or as authorized by you via your privacy settings with Facebook.
        </span>
        <span className={css.dot}>
        <strong>Other sources</strong> To the extent permitted by applicable law, we may receive additional 
        information about you, such as demographic data or fraud detection information, 
        from third party service providers and/or partners, and combine it with information 
        we have about you. For example, we may receive background check results 
        (with your consent where required) or fraud warnings from service providers like identity 
        verification services for our fraud prevention and risk assessment efforts. We may receive 
        information about you and your activities on and off the xNomad Platform through partnerships, 
        or about your experiences and interactions from our partner ad networks.
        </span>
      </p>

      <h2>2. How to use information we collect</h2>
      <p>We store, use, and process information, including personal information, 
        about you (1) to develop, understand, and improve the xNomad Platform; (2) 
        to create and maintain a safe and trusted marketplace; and (3) 
        to comply with our legal obligations.
      </p>
      <p>
        <strong>2.1 Provide, Improve and Develop the xNomad Platform</strong> <br/>

        <span className={css.dot}>
        Enable you to use and enjoy the xNomad Platform.
        </span>
        <span className={css.dot}>
        Enable you to communicate with other users.
        </span>
        <span className={css.dot}>
        Operate, protect, improve, and optimize the xNomad Platform and experience, such as by performing analytics and conducting research.
        </span>
        <span className={css.dot}>
        Provide customer service.
        </span>
        <span className={css.dot}>
        Send you service or support messages, updates, security alerts, and account notifications.
        </span>
        We process this information given our legitimate interest in improving the xNomad Platform and our users’ experience with it, and where it is necessary for the adequate performance of the contract with you.<br/><br/>

        <strong>2.2 Create and Maintain a Safe and Trusted Marketplace</strong>
        <span className={css.dot}>
        Conduct security investigations and risk assessments.
        </span>
        <span className={css.dot}>
        Detect and prevent fraud, spam, abuse, security incidents, and other harmful activity.
        </span>
        <span className={css.dot}>
        Verify or authenticate information or identifications provided by you (such as to verify your Accommodation address or compare your identification photo to another photo you provide).
        </span>
        <span className={css.dot}>
        Conduct checks against databases and other information sources, including background or police checks, to the extent permitted by applicable laws and with your consent where required.
        </span>
        <span className={css.dot}>
        Comply with legal obligations (such as anti-money laundering regulations).
        </span>
        <span className={css.dot}>
        Resolve any disputes with any of our users and enforce our agreements with third parties.
        </span>
        <span className={css.dot}>
        Enforce our Terms of Service and other policies.
        </span>
        We process this information given our legitimate interest in protecting the xNomad Platform, to measure the adequate performance of our contract with you, and to comply with applicable laws.<br/><br/>
        
        <strong>2.3 Provide, Personalize, Measure and Improve our Advertising and Marketing.</strong>
        <span className={css.dot}>
        Send you promotional messages, marketing and other information that may be of interest 
        to you (including information about xNomad or partner campaigns and services) 
        and social media advertising through social media platforms such as Facebook or Google).
        </span>
        <span className={css.dot}>
        Personalize, measure, and improve our advertising.
        </span>
        We will process your personal information for the purposes listed in this section given our legitimate interest in undertaking marketing activities to offer you products or services that may be of your interest. You can opt-out of receiving marketing communications from us by following the unsubscribe instructions included in our marketing communications or changing your notification settings within your xNomad Account.
      </p>

      <h2>3. SHARING and DISCLOSURE</h2>
      <p>
        <strong>3.1 With Your Consent</strong> <br/>
        Where you have provided consent, we share your information, including personal information, as described at the time of consent.<br/>
        <strong>3.2 Sharing between users</strong> <br/>
        To help facilitate bookings or other interactions between users, we may need to share certain information, including personal information, with other users, as it is necessary for the adequate performance of the contract between you and us, as follows:   
        <span className={css.dot}>
        When you as a Renter submit a booking request, certain information about you is shared with the Listing Owner, including your name and the name of your company. We may share additional information to coordinate a site visit or to complete your booking.
        </span>
        <span className={css.dot}>
        When you as a Listing Owner have a booking request, certain information may be shared with potential renters to coordinate a site visit or address any questions.  
        </span>
        We don’t share your billing and payout information with other users without your express permission.<br/>
        <strong>3.3 Listings, and other Public Information</strong><br/>
        To a limited extent, xNomad Platform lets you publish information, including personal information, that is visible to the general public. Specifically, Listing pages are publicly visible and include information including the name of the Listing Owner and any information they may have shared about themself in the Listing descriptions. 
        Based on our legitimate interest to promote the xNomad Platform we may display parts of the xNomad Platform (e.g., your Listing page) on sites operated by xNomad’s business partners, using technologies such as widgets or APIs. If your Listings are displayed on a partner’s site, information from your public profile page may also be displayed.<br/>
        <strong>3.4 Additional Services by Listing Owners.</strong><br/>
        Listing Owners may need to use third party services available through the xNomad Platform to assist with their event, such as cartage services, furniture rental, or catering providers. Listing Owners may use features on the xNomad Platform to share information about the Guest with such third party service providers for the purposes of coordinating the event and providing related services.<br/>
        <strong>3.5 Compliance with Law, Responding to Legal Requests, Preventing Harm and Protection of our Rights</strong><br/>
        xNomad may disclose your information, including personal information, to courts, law enforcement or governmental authorities, or authorized third parties, if and to the extent we are required or permitted to do so by law or if such disclosure is reasonably necessary: (i) comply with our legal obligations, (ii) to comply with legal process and to respond to claims asserted against xNomad, (iii) to respond to verified requests relating to a criminal investigation or alleged or suspected illegal activity or any other activity that may expose us, you, or any other of our users to legal liability, (iv) to enforce and administer our Terms of Service or other agreements with users, or (v) to protect the rights, property or personal safety of xNomad, its employees, its users, or members of the public.<br/>
        Where appropriate, we may notify users about legal requests unless: (i) providing notice is prohibited by the legal process itself, by court order we receive, or by applicable law, or (ii) we believe that providing notice would be futile, ineffective, create a risk of injury or bodily harm to an individual or group, or create or increase a risk of fraud upon xNomad’s property, its users and the xNomad Platform. In instances where we comply with legal requests without notice for these reasons, we will attempt to notify that Member about the request after the fact where appropriate and where we determine in good faith that we are no longer prevented from doing so.<br/>
        <strong>3.6 Service Providers.</strong><br/>
        xNomad uses a variety of third party service providers to help us provide services related to the xNomad Platform and the Payment Services. Service providers may be located inside or outside of the European Economic Area (“EEA”).
        For example, service providers may help us: (i) verify your identity or authenticate your identification documents, (ii) check information against public databases, (iii) conduct background or police checks, fraud prevention, and risk assessment, (iv) perform product development, maintenance and debugging, (v) allow the provision of the xNomad Services through third party platforms and software tools (e.g. through the integration with our APIs), or (vi) provide customer service, advertising, or payments services. These providers have limited access to your information to perform these tasks on our behalf, and are contractually bound to protect and to use it only for the purposes for which it was disclosed and consistent with this Privacy Policy.
        xNomad will need to share your information, including personal information, in order to ensure the adequate performance of our contract with you.<br/>
        <strong>3.7 Social Media Platforms.</strong><br/>
        Where permissible according to applicable law we may use certain limited personal information about you, such as your email address, to hash it and to share it with social media platforms, such as Facebook, Google or LinkedIn, to generate leads, drive traffic to our websites or otherwise promote our products and services or the xNomad Platform. These processing activities are based on our legitimate interest in undertaking marketing activities to offer you products or services that may be if your interest.
        The social media platforms with which we may share your personal data are not controlled or supervised by xNomad. Therefore, any questions regarding how your social media platform service provider processes your personal data should be directed to such provider.
        Please note that you may, at any time ask xNomad to cease processing your data for these direct marketing purposes by sending an e-mail to privacy@xNomad.co.<br/>
        <strong>3.8 Business Transfers</strong><br/>
        If xNomad is involved in any merger, acquisition, reorganization, sale of assets, bankruptcy, or insolvency event, then we may sell, transfer or share some or all of our assets, including your information in connection with such transaction or in contemplation of such transaction (e.g., due diligence).<br/>
        <strong>3.9 Aggregated Data</strong><br/>
        We may also share aggregated information (information about our users that we combine together so that it no longer identifies or references an individual user) and other anonymized information for regulatory compliance, industry and market analysis, demographic profiling, marketing and advertising, and other business purposes.<br/>
      </p>

      <h2>4. Your Communications.</h2>
      <p>
      We review, scan, or analyze your communications on the xNomad Platform for fraud prevention, risk assessment, regulatory compliance, investigation, product development, research, and customer support purposes. We will not review, scan, or analyze your communications for marketing or profiling purposes, and we will not sell these communications or analysis of them.
      These activities are carried out based on xNomad's legitimate interest in ensuring compliance with applicable laws and our Terms, preventing fraud, and improving and ensuring the adequate performance of our services.
      </p>

      <h2>5. Third Party Partners and integrations.</h2>
      <p>
      The xNomad Platform may contain links to third party websites or services, such as third party integrations, co-branded services, or third party-branded services (“Third Party Partners”). xNomad doesn’t own or control these Third Party Partners and when you interact with them, you may be providing information directly to the Third Party Partner, xNomad, or both. These Third Party Partners will have their own rules about the collection, use, and disclosure of information. We encourage you to review the privacy policies of the other websites you visit.
      </p>

      <h2>6. Your Rights.</h2>
      <p>You may exercise any of the rights described in this section by sending an email to privacy@xNomad.co. Please note that we may ask you to verify your identity before taking further action on your request.</p>
      <p>
        <strong>6.1 Managing Your Information.</strong><br/>
        You may access and update some of your information through your Account settings. If you have chosen to connect your xNomad Account to a third-party application, like Facebook or Google, you can change your settings and remove permission for the app by changing your Account settings. You are responsible for keeping your personal information up-to-date.<br/>
        <strong>6.2 Rectification of Inaccurate or Incomplete Information</strong><br/>
        You have the right to ask us to correct inaccurate or incomplete personal information concerning you (and which you cannot update yourself within your xNomad Account).<br/>
        <strong>6.3 Data Access and Portability</strong><br/>
        In some jurisdictions, applicable law may entitle you to request copies of your personal information held by us. You may also be entitled to request copies of personal information that you have provided to us in a structured, commonly used, and machine-readable format and/or request us to transmit this information to another service provider (where technically feasible).<br/>
        <strong>6.4 Data Retention and Erasure</strong><br/>
        We generally retain your personal information for as long as is necessary for the performance of the contract between you and us and to comply with our legal obligations. If you no longer want us to use your information to provide the xNomad Platform to you, you can request that we erase your personal information and close your xNomad Account. Please note that if you request the erasure of your personal information:
        <span className={css.dot}>
        We may retain some of your personal information as necessary for our legitimate business interests, such as fraud detection and prevention and enhancing safety. For example, if we suspend a xNomad Account for fraud or safety reasons, we may retain certain information from that xNomad Account to prevent that Member from opening a new xNomad Account in the future.
        </span>
        <span className={css.dot}>
        We may retain and use your personal information to the extent necessary to comply with our legal obligations. For example, xNomad may keep some of your information for tax, legal reporting and auditing obligations.
        </span>
        <span className={css.dot}>
        Information you have shared with others (e.g., Reviews, forum postings) may continue to be publicly visible on the xNomad Platform, even after your xNomad Account is cancelled. However, attribution of such information to you will be removed. Additionally, some copies of your information (e.g., log records) may remain in our database, but are disassociated from personal identifiers.
        </span>
        <span className={css.dot}>
        Because we maintain the xNomad Platform to protect from accidental or malicious loss and destruction, residual copies of your personal information may not be removed from our backup systems for a limited period of time.
        </span>
        <strong>6.5 Withdrawing Consent and Restriction of Processing</strong><br/>
        Where you have provided your consent to the processing of your personal information by xNomad you may withdraw your consent at any time by sending a communication to xNomad specifying which consent you are withdrawing.  This may necessarily result in the closure of your account. Please note that the withdrawal of your consent does not affect the lawfulness of any processing activities based on such consent before its withdrawal. Additionally, in some jurisdictions, applicable law may give you the right to limit the ways in which we use your personal information, in particular where (i) you contest the accuracy of your personal information; (ii) the processing is unlawful and you oppose the erasure of your personal information; (iii) we no longer need your personal information for the purposes of the processing, but you require the information for the establishment, exercise or defence of legal claims; or (iv) you have objected to the processing pursuant to Section 6.6 and pending the verification whether the legitimate grounds of xNomad override your own.<br/>
        <strong>6.6 Objection to Precessing</strong>
        Where you have provided your consent to the processing of your personal information by xNomad you may withdraw your consent at any time by sending a communication to xNomad specifying which consent you are withdrawing.  This may necessarily result in the closure of your account. Please note that the withdrawal of your consent does not affect the lawfulness of any processing activities based on such consent before its withdrawal. Additionally, in some jurisdictions, applicable law may give you the right to limit the ways in which we use your personal information, in particular where (i) you contest the accuracy of your personal information; (ii) the processing is unlawful and you oppose the erasure of your personal information; (iii) we no longer need your personal information for the purposes of the processing, but you require the information for the establishment, exercise or defence of legal claims; or (iv) you have objected to the processing pursuant to Section 6.6 and pending the verification whether the legitimate grounds of xNomad override your own.<br/>
        <strong>6.7 Lodging Complaints.</strong><br/>
        You have the right to lodge complaints about the data processing activities carried out by xNomad before the competent data protection authorities. If you reside in the European Economic Area (EEA), you have the right to file a complaint with xNomad’s lead supervisory authority, National Commission on Informatics and Liberty (Commission Nationale de l'Informatique et des Libertés) (CNIL).<br/>
      </p>

      <h2>7. Operating Globally.</h2>
      <p>To facilitate our global operations xNomad may transfer, store, and process your information within our family of companies or with service providers based in Europe, India, Asia Pacific and North America. Laws in these countries may differ from the laws applicable to your Country of Residence. For example, information collected within the EEA may be transferred, stored, and processed outside of the EEA for the purposes described in this Privacy Policy. Where we transfer store, and process your personal information outside of the EEA we have ensured that appropriate safeguards are in place to ensure an adequate level of data protection.
      If your information is shared with corporate affiliates or third party service providers outside the EEA, we have – prior to sharing your information with such corporate affiliate or third party service provider – established the necessary means to ensure an adequate level of data protection. This may be an adequacy decision of the European Commission confirming an adequate level of data protection in the respective non-EEA country or an agreement on the basis of the EU Model Clauses (a set of clauses issued by the European Commission). We will provide further information on the means to ensure an adequate level of data protection on request.
      </p>
      <p>
        <strong>7.1 California and Vermont Residents.</strong><br/>
        xNomad will not share information it collects about you with its affiliates or third parties (both financial and non-financial), except as required or permitted by your state’s law.<br/>
        <strong>7.2 California Privacy Rights</strong><br/>
        California law permits users who are California residents to request and obtain from us once a year, free of charge, a list of the third parties to whom we have disclosed their personal information (if any) for their direct marketing purposes in the prior calendar year, as well as the type of personal information disclosed to those third parties. See the “Contact” section for where to send such requests. xNomad does not share personal information with third parties for their own direct marketing purposes without your prior consent. Accordingly, you can prevent disclosure of your personal information to third parties for their direct marketing purposes by withholding consent.
      </p>

      <h2>8. Security.</h2>
      <p>We are continuously implementing and updating administrative, technical, and physical security measures to help protect your information against unauthorized access, loss, destruction, or alteration. Some of the safeguards we use to protect your information are firewalls and data encryption, and information access controls. If you know or have reason to believe that your xNomad Account credentials have been lost, stolen, misappropriated, or otherwise compromised or in case of any actual or suspected unauthorized use of your xNomad Account, please contact us following the instructions in the Contact Us section below.</p>

      <h2>9. Changes To This Privacy Policy.</h2>
      <p>xNomad reserves the right to modify this Privacy Policy at any time in accordance with this provision. If we make changes to this Privacy Policy, we will post the revised Privacy Policy on the xNomad Platform and update the “Last Updated” date at the top of this Privacy Policy. We will also provide you with notice of the modification by email at least thirty (30) days before the date they become effective. If you disagree with the revised Privacy Policy, you may cancel your Account. If you do not cancel your Account before the date the revised Privacy Policy becomes effective, your continued access to or use of the xNomad Platform will be subject to the revised Privacy Policy.</p>

      <h2>10. Contact Us.</h2>
      <p>If you have any questions or complaints about this Privacy Policy or xNomad’s information handling practices, please email us at <a href="mailto:privacy@xNomad.co">privacy@xNomad.co</a>.</p>
    </div>
  );
};

PrivacyPolicy.defaultProps = {
  rootClassName: null,
  className: null,
};

const { string } = PropTypes;

PrivacyPolicy.propTypes = {
  rootClassName: string,
  className: string,
};

export default PrivacyPolicy;
