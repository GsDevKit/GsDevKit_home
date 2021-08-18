private
newStoneRegistration: registrationClass registryName: registryName stonePath: path
  ^ self stones
    add:
      ((registrationClass newForRegistry: self)
        registryName: registryName;
        stonePath: path;
        yourself)