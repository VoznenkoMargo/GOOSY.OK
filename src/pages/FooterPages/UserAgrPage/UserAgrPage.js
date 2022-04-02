import React from "react";
import ArrowBack from "../../../components/ArrowBack/ArrowBack";
import styles from "./UserAgrPage.module.scss";

function UserAgrPage() {
  return (
    <div className={styles.user_agr}>
      <div className={styles.user_agr_back}>
        <ArrowBack />
      </div>
      <h2>User Agreement</h2>
      <h3>Privacy agreement</h3>
      <p>
        This agreement for processing, storing and protecting customer (user)
        data (later is referred to agreement) determines the procedure of
        handling customer data (users) that are voluntarily registered at the
        site goosyok.ua (as well as through various mobile applications,
        programs, codes, links).
      </p>
      <h3>1. About the agreement.</h3>
      <p>
        By accepting this agreement, client (user) gives voluntary permission /
        consent to collection, storage and use of his data (including, but not
        limited to registration data, specified / updated / restored data,
        statistics data about preferences of the client (user ), technical data
        about the clients (users) Internet provider, clients (users) IP address,
        characteristics of the PC and software, which are used, data about
        uploaded and downloaded to the site files, etc.), in accordance with
        this agreement, Ukrainian law `&ldquo;`About protection of
        consumers`&apos;` rights`&ldquo;`, “About personal data protection”.
      </p>
      <p>
        The agreement is valid from the moment of the client (user) registration
        at the website goosyok.ua or at the time of taking telephone orders 0800
        50 10 50; 044 80 100 80; 067 215 9888; 099 888 77 66; 093 888 77 66.
      </p>
      <p>
        * Information about the client (user), voluntarily placed by him in the
        general sections of the site during the filling out of registration
        forms and available to any other user of the site or information, that
        can be freely obtained from other publicly available sources, is not
        confidential.
      </p>
      <h3>2. The use of data about customer (user).</h3>
      <p>The information about the client (user) has limited access.</p>
      <p>
        The purpose of processing client (user) data is: to ensure the
        implementation of administrative and legal relations, relations in the
        field of tax and accounting, advertising, and other relations in which
        data from customers (users) are used.
      </p>
      <p>
        Collection, storage, use, processing, disclosure of information obtained
        by the site administration as a result of a clients (users) visit to its
        sites and / or filling in registration forms, including personal data of
        clients (users), is carried out by the site administration in accordance
        with Ukrainian legislation. A person (customer or user) recognizes and
        provides consent to the collection and processing of their personal data
        by the site administration within the framework and with the purpose,
        stipulated by the terms of this privacy agreement in accordance with the
        legislation of Ukraine.
      </p>
      <p>
        At the site goosyok.ua can be collected, stored and used the following
        data:
      </p>
      <p>• city of the clients (users) location;</p>
      <p>• e-mail address (e-mail);</p>
      <p>• mobile or telephone (stationary) number of the client (user);</p>
      <p>
        • other data, which was provided by the client (user) during filling out
        the registration form at the website goosyok.ua.
      </p>
      <p>
        The client (user) agrees that the data, transmitted to them can be used
        to:
      </p>
      <p>
        • notifications of the company where the order was made, about details
        of the order;
      </p>
      <p>• providing services of orders delivery;</p>
      <p>• improvement of own services, site and advertising content;</p>
      <p>
        • customer notifications of services, news and promotions via Viber,
        SMS, e-mails, mails, etc.
      </p>
      <h3>3. Disclosure of customer data (user).</h3>
      <p>
        Client (user) data may be provided to third persons in the following
        cases:
      </p>
      <p>• obtained additional customer consent;</p>
      <p>
        • provision of general information (statistical data, aggregated
        information), which does not contain personal information and which does
        not identify the client individually;
      </p>
      <p>
        • providing information to law enforcement and other government agencies
        in response to their official request, regarding a criminal
        investigation or alleged unlawful activity.
      </p>
      <h3>4. Data protection.</h3>
      <p>
        GOOSY.OK is committed to take appropriate security measures to protect
        against unauthorized access or unauthorized alteration, disclosure or
        destruction of customer (user) data.
      </p>
      <p>
        Access to the user`&apos;`s personal information is provided through an
        authorization system with a login and password. The client (user)
        undertakes to ensure the safety of the authorization data independently,
        not to disclose it to third persons. Any changes of personal
        information, which are made through authorization data, will be
        considered personally realized by the client (user).
      </p>
      <p>
        The activity of the site administration is carried out in accordance
        with the legislation of Ukraine. Any claims, disputes, official appeals
        will be considered exclusively in the manner, prescribed by the
        legislation of Ukraine.
      </p>
    </div>
  );
}

export default UserAgrPage;
