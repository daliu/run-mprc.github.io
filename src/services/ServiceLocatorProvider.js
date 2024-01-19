import React, { useEffect, useState } from "react";
import { FirebaseResources } from "./firebase/FirebaseResources";
import { ServiceLocatorContext } from "./ServiceLocatorContext";

import IdentityService from "./identity/Identity";

const ServiceLocatorProvider = ({ children }) => {
  const [services, setServices] = useState({});

  console.log("ServiceLocatorProvider is mounted");

  useEffect(() => {
    const firebaseResources = new FirebaseResources();
    const identityService = new IdentityService(firebaseResources);
    console.log("ServiceLocatorProvider use effect");
    setServices({
      firebaseResources,
      identityService,
    });
  }, []);

  return (
    <ServiceLocatorContext.Provider value={services}>
      {children}
    </ServiceLocatorContext.Provider>
  );
};

export default ServiceLocatorProvider;
