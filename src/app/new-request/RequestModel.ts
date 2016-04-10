export interface RequestModel {
  status: number;

  cardType?: string;

  personalDetails: {
    firstName?: string;
    lastName?: string;
    maritalStatus?: string;
    birthDate?: Date;
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
