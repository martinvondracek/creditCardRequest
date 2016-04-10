export interface RequestModel {
  status: number;

  cardType?: string;

  personalDetails: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    birthDate?: Date;
    maritalStatus?: string;
    street?: string;
    zipCode?: string;
    city?: string;
    state?: string;
  };
}

export class RequestModelImpl implements RequestModel {
  status = 0;

  personalDetails = {};
}
