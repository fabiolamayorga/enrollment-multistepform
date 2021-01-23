export interface IConditions {
    type: string;
    condition: string;
  }
  
  export interface IFormConditions {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    birthdate: string;
    conditions: string[];
    personalConditions: string[];
    smoke: string;
    howOftenSmoke?: string;
    alcohol: string;
    howOftenAlcohol?: string;
    drugs: string;
    howOftenDrugs?: string;
    acceptedTerms:string;
  }
  
  export interface ConditionProps {
    values: IFormConditions;
    errors?: Errors;
  }

  export interface Errors {
    firstName?: string | string[] | undefined;
    lastName?: string | string[] | undefined;
    email?: string | string[] | undefined;
    address?: string | string[] | undefined;
    birthdate?: string | string[] | undefined;
    conditions?: string | string[] | undefined;
    personalConditions?: string | string[] | undefined;
    smoke?: string | string[] | undefined;
    howOftenSmoke?: string | string[] | undefined;
    alcohol?: string | string[] | undefined;
    howOftenAlcohol?: string | string[] | undefined;
    drugs?: string | string[] | undefined;
    howOftenDrugs?: string | string[] | undefined;
  }
  
  export interface ToogleProps {
    question: string;
    hiddenQuestion: string;
    hiddenQuestionName: string;
    name: string;
    values: any
  }
  

  