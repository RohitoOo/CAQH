const express = require ('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
// const keys = require('./config/keys');

// require ('./models/User')
// require ('./services/passport')


// mongoose.connect(keys.mongoURI)

const app = express();





app.use(passport.initialize());
app.use(passport.session());

app.get('/caqh/:id' , function (req, res){

    if(req.params.id == 100000000){
        res.send({
            "@ProviderID": "100000000",
            "@ProviderAttestID": "96755383",
            "@AttestDate": "2019-07-16T14:05:44",
            "@ID": "1000",
            "LastName": "Rai",
            "FirstName": "Ashwarya",
            "MiddleName": "",
            "PrimaryPracticeState": "DC",
            "OtherNameFlag": "1",
            "BirthDate": "2001-10-16T00:00:00",
            "USEligibleFlag": "1",
            "SSN": "132324454",
            "NID": "1336349257",
            "DEAFlag": "0",
            "CDSFlag": "0",
            "UPINFlag": "1",
            "NPIFlag": "1",
            "NPI": "1063485183",
            "MedicareProviderFlag": "0",
            "MedicaidProviderFlag": "0",
            "FellowshipTrainingFlag": "0",
            "SecondarySpecialtyFlag": "1",
            "OtherSpecialtyFlag": "1",
            "HospitalPrivilegeFlag": "1",
            "HospitalAdmittingArrangements": "See Replica for Admitting Arrangement",
            "WorkHistoryGapFlag": "0",
            "ActiveMilitaryFlag": "1",
            "CitizenshipStatus": "United States",
            "VisaNumber": "1366797532",
            "ECFMGFlag": "1",
            "ECFMGNumber": "757555",
            "ECFMGIssueDate": "2018-11-04T00:00:00",
            "HospitalBasedFlag": "0",
            "VisaType": "4654",
            "VisaExpirationDate": "2019-01-18T00:00:00",
            "ECFMGExpirationDate": "2018-12-15T00:00:00",
            "AffiliatedFlag": "1",
            "DelegatedFlag": "0",
            "ProviderType": {
              "ProviderTypeAbbreviation": "MD"
            },
            "OtherName": [
              {
                "@ID": "1000",
                "LastName": "CHANDESH",
                "FirstName": "Aishwarya",
                "MiddleName": "m",
                "Suffix": "I",
                "OtherNameExplanation": "Just for fun"
              },
              {
                "@ID": "1001",
                "LastName": "two",
                "FirstName": "Aishwaryaaa",
                "MiddleName": "two",
                "Suffix": "II",
                "OtherNameExplanation": "My wish"
              },
              {
                "@ID": "1002",
                "LastName": "three",
                "FirstName": "three",
                "MiddleName": "three",
                "Suffix": "III",
                "OtherNameExplanation": "simply"
              },
              {
                "@ID": "1003",
                "LastName": "four",
                "FirstName": "four",
                "MiddleName": "four",
                "Suffix": "IV",
                "OtherNameExplanation": "four my name"
              },
              {
                "@ID": "1004",
                "LastName": "five",
                "FirstName": "five",
                "MiddleName": "five",
                "Suffix": "V",
                "OtherNameExplanation": "five"
              },
              {
                "@ID": "1005",
                "LastName": "ABBAREDDY",
                "FirstName": "Aishwarya",
                "MiddleName": "six",
                "Suffix": "VI",
                "OtherNameExplanation": "six"
              },
              {
                "@ID": "1006",
                "LastName": "RADNOTHY",
                "FirstName": "LOUIS",
                "MiddleName": "seven",
                "Suffix": "Sr",
                "OtherNameExplanation": "seven"
              }
            ],
            "Gender": {
              "GenderDescription": "Male"
            },
            "Language": [
              {
                "@ID": "1000",
                "Language": {
                  "LanguageName": "Afan (Oromo)"
                }
              },
              {
                "@ID": "1001",
                "Language": {
                  "LanguageName": "Afar"
                }
              },
              {
                "@ID": "1002",
                "Language": {
                  "LanguageName": "American Sign Language"
                }
              }
            ],
            "ProviderIdentifier": [
              {
                "@ID": "1000",
                "IdentifierValue": "testingg",
                "IssueDate": "2018-07-16T00:00:00",
                "ExpirationDate": "2019-01-18T00:00:00",
                "Sponsor": "123123",
                "IdentifierType": {
                  "IdentifierTypeDescription": "Temporary Visa"
                }
              },
              {
                "@ID": "1001",
                "IdentifierValue": "34665765787",
                "IdentifierType": {
                  "IdentifierTypeDescription": "Workers Compensation Number"
                }
              }
            ],
            "ProviderLicense": [
              {
                "@ID": "1000",
                "LicenseNumber": "34535435",
                "State": "DC",
                "CurrentlyPracticingFlag": "1",
                "ExpirationDate": "2021-01-01T00:00:00",
                "LicenseType": "APN",
                "IssueDate": "2018-11-11T00:00:00",
                "LicenseUnlimitedFlag": "1",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Current License"
                }
              },
              {
                "@ID": "1001",
                "LicenseNumber": "77777777",
                "State": "OK",
                "CurrentlyPracticingFlag": "0",
                "ExpirationDate": "2019-01-24T00:00:00",
                "LicenseType": "ABA",
                "IssueDate": "2018-11-04T00:00:00",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Inactive/Expired"
                }
              },
              {
                "@ID": "1002",
                "LicenseNumber": "8888888",
                "State": "AK",
                "CurrentlyPracticingFlag": "0",
                "ExpirationDate": "2018-11-25T00:00:00",
                "LicenseType": "AA",
                "IssueDate": "2018-11-04T00:00:00",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Previous License"
                }
              },
              {
                "@ID": "1003",
                "LicenseNumber": "5555555555",
                "State": "CA",
                "CurrentlyPracticingFlag": "1",
                "ExpirationDate": "2018-11-21T00:00:00",
                "LicenseType": "APN",
                "IssueDate": "2018-11-05T00:00:00"
              }
            ],
            "Education": [
              {
                "@ID": "1000",
                "InstitutionName": "Athens-Limestone Hospital (Athens, AL)",
                "Address": "700 West Market Street",
                "City": "Athens",
                "State": "AL",
                "PostalCode": "35611",
                "StartDate": "2018-01-01T00:00:00",
                "EndDate": "2018-12-01T00:00:00",
                "HospitalDepartmentName": "Department",
                "ProgramCompletedFlag": "1",
                "CompletionDate": "2018-10-06T00:00:00",
                "PhoneNumber": "2562339292",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "Department",
                "EducationTypeName": "Internship",
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "InstitutionName": "Anoka-Metro Reg Treatment Ctr",
                "Address": "3300 Fourth Avenue North",
                "City": "Anoka",
                "State": "MN",
                "PostalCode": "55303",
                "StartDate": "2018-02-01T00:00:00",
                "EndDate": "2018-12-01T00:00:00",
                "HospitalDepartmentName": "Department",
                "ProgramCompletedFlag": "0",
                "IncompleteExplanation": "Department",
                "PhoneNumber": "6127124000",
                "DisciplinaryActionFlag": "0",
                "EducationTypeName": "Internship",
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1002",
                "InstitutionName": "Adams County Memorial Hospital (Decatur, IN)",
                "Address": "805 High Street",
                "City": "Decatur",
                "State": "IN",
                "PostalCode": "46733",
                "StartDate": "2015-07-01T00:00:00",
                "EndDate": "2017-07-01T00:00:00",
                "ProgramCompletedFlag": "0",
                "CertificateAwarded": "dfh",
                "IncompleteExplanation": "Test",
                "PhoneNumber": "2197242145",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "tt",
                "EducationTypeName": "Professional School",
                "Country": {
                  "CountryName": "United States"
                },
                "Degree": {
                  "DegreeAbbreviation": "MBBCH"
                }
              },
              {
                "@ID": "1003",
                "InstitutionName": "Dalhousie University Faculty of Dentistry",
                "Address": "5981 University Avenue",
                "City": "Halifax",
                "Province": "Nova Scotia",
                "State": "IA",
                "PostalCode": "B3H-3J5",
                "StartDate": "2001-12-01T00:00:00",
                "EndDate": "2019-11-01T00:00:00",
                "ProgramCompletedFlag": "1",
                "CompletionDate": "2018-08-19T00:00:00",
                "CertificateAwarded": "dfhdf",
                "PhoneNumber": "9024946734",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "dssdfs",
                "EducationTypeName": "Professional School",
                "Country": {
                  "CountryName": "Canada"
                },
                "Degree": {
                  "DegreeAbbreviation": "APRN"
                },
                "InstitutionType": {
                  "InstitutionTypeDescription": "Dental School"
                }
              },
              {
                "@ID": "1004",
                "InstitutionName": "Faculty Of Medicine",
                "Address": "Avicenna State Medical Institute Of Kabul",
                "City": "Kabul",
                "State": "AR",
                "DisciplinaryActionFlag": "0",
                "EducationTypeName": "Undergraduate School",
                "Country": {
                  "CountryName": "Afghanistan"
                },
                "InstitutionType": {
                  "InstitutionTypeDescription": "Fifth Pathway NonUS Medic"
                }
              }
            ],
            "Degree": [
              {
                "@ID": "1000",
                "Degree": {
                  "DegreeAbbreviation": "MBBCH"
                }
              },
              {
                "@ID": "1001",
                "Degree": {
                  "DegreeAbbreviation": "APRN"
                }
              }
            ],
            "Specialty": [
              {
                "@ID": "1000",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-09-01T00:00:00",
                "FailedBoardExamFlag": "0",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "1",
                "IntendApplyCertificationDate": "2019-10-01T00:00:00",
                "ExamAcceptedFlag": "0",
                "AdmissibilityExpirationDate": "2019-05-01T00:00:00",
                "IntendingBoardFlag": "1",
                "SpecialtyPercent": "77",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Primary"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Intending to Sit for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Addiction Medicine"
                },
                "NUCCTaxonomyCode": "2084A0401X"
              },
              {
                "@ID": "1001",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-10-01T00:00:00",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "0",
                "ExamAcceptedFlag": "0",
                "NoCertificationExplanation": "fdhdf",
                "AdmissibilityExpirationDate": "2019-06-01T00:00:00",
                "SpecialtyPercent": "77",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Secondary"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine"
                }
              },
              {
                "@ID": "1002",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-10-01T00:00:00",
                "ApplyCertificationFlag": "1",
                "IntendApplyCertificationFlag": "0",
                "ExamAcceptedFlag": "1",
                "AdmissibilityExpirationDate": "2019-06-01T00:00:00",
                "NotEligibleBoardFlag": "1",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Other"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Applied for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine: Family Practice"
                },
                "NUCCTaxonomyCode": "207QA0000X"
              },
              {
                "@ID": "1003",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-06-01T00:00:00",
                "FailedBoardExamFlag": "0",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "1",
                "IntendApplyCertificationDate": "2019-10-01T00:00:00",
                "ExamAcceptedFlag": "0",
                "AdmissibilityExpirationDate": "2019-10-01T00:00:00",
                "IntendingBoardFlag": "1",
                "SpecialtyPercent": "66",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Other"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Intending to Sit for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine: Internal Medicine"
                },
                "NUCCTaxonomyCode": "207RA0000X"
              }
            ],
            "Associate": [
              {
                "@ID": "1000",
                "AssociateFirstName": "gtrh",
                "AssociateLastName": "thr",
                "AssociateMiddleInitial": "t",
                "Address": "5981 University Avenue",
                "City": "Halifax",
                "State": "AR",
                "PhoneNumber": "9024946734",
                "AssociateType": {
                  "AssociateTypeDescription": "Credentialing Contact"
                },
                "Country": {
                  "CountryName": "Afghanistan"
                }
              },
              {
                "@ID": "1001",
                "AssociateFirstName": "sdgfsdg",
                "AssociateLastName": "fgdfg",
                "AssociateMiddleInitial": "d",
                "Address": "gfdgdf",
                "Address2": "fgdfgh",
                "City": "dsfgdsfg",
                "State": "AR",
                "PostalCode": "234525345",
                "Province": "dfgdfg",
                "PhoneNumber": "3213424234",
                "FaxNumber": "2354235234",
                "EmailAddress": "ee@rr.com",
                "AssociateType": {
                  "AssociateTypeDescription": "Credentialing Contact"
                },
                "Country": {
                  "CountryName": "American Samoa"
                }
              }
            ],
            "Practice": [
              {
                "@ID": "1000",
                "PracticeName": "rk",
                "Address": "101 W UNIVERSITY AVE",
                "Address2": "FGD",
                "City": "CHAMPAIGN",
                "State": "IL",
                "Zip": "61820",
                "ExtZip": "3909",
                "CurrentlyPracticingFlag": "0",
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "123456567"
                },
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "101 W UNIVERSITY AVE",
                  "Address2": "FGD",
                  "City": "CHAMPAIGN",
                  "State": "IL",
                  "PostalCode": "618203909",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1001",
                "PracticeName": "aishwarya",
                "Address": "aishwarya",
                "Address2": "aishwarya",
                "City": "washington",
                "State": "AR",
                "Zip": "23354",
                "ExtZip": "5566",
                "County": "Boone County",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "aishwarya",
                  "Address2": "aishwarya",
                  "City": "washington",
                  "County": "Boone County",
                  "State": "AR",
                  "PostalCode": "233545566",
                  "Province": "54656565",
                  "Country": {
                    "CountryName": "American Samoa"
                  }
                }
              },
              {
                "@ID": "1002",
                "PracticeName": "Pnmae",
                "Address": "901 Southwind Road",
                "Address2": "po box 123",
                "City": "Springfield",
                "State": "IL",
                "Zip": "62703",
                "County": "Bond County",
                "PhoneNumber": "4373473473",
                "EmailAddress": "email@email.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2019-04-29T00:00:00",
                "ADAApprovedFlag": "1",
                "MinorityBusinessFlag": "1",
                "InterpreterAvailableFlag": "1",
                "PatientAppointmentPhoneNumber": "4373473473",
                "ListInDirectoryFlag": "1",
                "W9PracticeName": "w9",
                "NPI": "3463474374",
                "PracticeTypeDescription": "Group/Single",
                "DepartmentName": "sdf",
                "PhoneExtension": "217786",
                "PatientAppointmentPhoneExtension": "217786",
                "AnsweringServicePhoneExtension": "217786",
                "PracticeWebsite": "sdf",
                "Accessibility": [
                  {
                    "@ID": "1001",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1009",
                    "AccessibilityFlag": "1",
                    "OtherAccessibilityDescription": "rtu",
                    "Accessibility": {
                      "AccessibilityDescription": "Other Transportation"
                    }
                  },
                  {
                    "@ID": "1015",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Child Care"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "sdfg",
                    "AssociateLastName": "dfhd",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "Cookie",
                    "AssociateLastName": "Monster",
                    "PhoneNumber": "2342342345",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "Uncle Moneybags",
                    "AssociateLastName": "Uncle Moneybags",
                    "AssociateMiddleInitial": "U",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "Zip": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Billing Contact"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "Uncle Moneybags",
                    "AssociateLastName": "Uncle Moneybags",
                    "AssociateMiddleInitial": "U",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "Zip": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "3454567756",
                    "EmailAddress": "billing@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Payment Contact"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "ProviderCertifiedFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "ExpirationDate": "2019-04-29T00:00:00",
                    "ProviderCertifiedFlag": "1",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "ProviderCertifiedFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "ProviderPracticeHours": [
                  {
                    "@ID": "1000",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Monday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1001",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Tuesday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1002",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Wednesday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1003",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Thursday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1004",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Friday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1005",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Saturday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1006",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Sunday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  }
                ],
                "Language": [
                  {
                    "@ID": "1000",
                    "LanguageType": "Speak",
                    "Language": {
                      "LanguageName": "Afar"
                    }
                  },
                  {
                    "@ID": "1001",
                    "LanguageType": "Translate",
                    "Language": {
                      "LanguageName": "American Sign Language"
                    }
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "OtherLimitationDescription": "ruru",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Female Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  }
                ],
                "Service": [
                  {
                    "@ID": "1000",
                    "ServiceProvidedFlag": "1",
                    "LaboratoryCertificationProgram": "Testing2",
                    "Service": {
                      "ServiceName": "Laboratory"
                    }
                  },
                  {
                    "@ID": "1002",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Radiology"
                    }
                  },
                  {
                    "@ID": "1003",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "EKG"
                    }
                  },
                  {
                    "@ID": "1007",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Allergy Skin Testing"
                    }
                  },
                  {
                    "@ID": "1009",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Drawing Blood"
                    }
                  },
                  {
                    "@ID": "1017",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Cardiac Stress Tests"
                    }
                  },
                  {
                    "@ID": "1019",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Anesthesia"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "The Hospital Authority of Chatham County",
                  "TaxID": "586321456",
                  "PrimaryFlag": "1",
                  "GroupNumber": "3463474374",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "901 Southwind Road",
                    "Address2": "po box 123",
                    "City": "Springfield",
                    "County": "Bond County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "Province": "sdf",
                    "EmailAddress": "email@email.com",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "901 Southwind Road",
                    "Address2": "po box 123",
                    "City": "Springfield",
                    "County": "Bond County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "Province": "sdf",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  },
                  {
                    "@ID": "1002",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "PostalCode": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "AddressType": {
                      "AddressTypeDescription": "Billing"
                    }
                  },
                  {
                    "@ID": "1003",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "PostalCode": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "3454567756",
                    "AnsweringServicePhoneNumber": "5484585485",
                    "EmailAddress": "billing@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "AddressType": {
                      "AddressTypeDescription": "Claims Payment"
                    }
                  }
                ]
              },
              {
                "@ID": "1003",
                "PracticeName": "test",
                "Address": "sdhsdh",
                "Address2": "dshsdh",
                "City": "sdhsdh",
                "State": "AR",
                "Zip": "33333",
                "ExtZip": "3333",
                "County": "Boone County",
                "PhoneNumber": "1361367067",
                "EmailAddress": "ee@ee.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "1",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2010-01-04T00:00:00",
                "PracticeLimitationFlag": "1",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PhoneNumber2": "1361367067",
                "PatientAppointmentPhoneNumber": "1361367067",
                "W9PracticeName": "sfsdfdxf",
                "NPI": "3333333333",
                "Accessibility": [
                  {
                    "@ID": "1000",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Meets fire, safety, and sanitation requirements"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "ttt",
                    "AssociateLastName": "fvjh",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "OtherAssociate"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Gname",
                    "AssociateLastName": "Lname",
                    "AssociateMiddleInitial": "G",
                    "LicenseNumber": "465",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Independent Medical Examiner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "ATest",
                    "AssociateLastName": "khjgkj",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "58578797",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Clinical & Laboratory Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "BTest",
                    "AssociateLastName": "hhh",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "7977977",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "CTest",
                    "AssociateLastName": "jj",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "687685757",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiologist Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "HOS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "DTest",
                    "AssociateLastName": "yui",
                    "AssociateMiddleInitial": "i",
                    "LicenseNumber": "9689797",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Practitioner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSW"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "ETest",
                    "AssociateLastName": "ooo",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "87686878",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Independent Medical Examiner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "HOS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "FTest",
                    "AssociateLastName": "sdfsdfsd",
                    "AssociateMiddleInitial": "d",
                    "LicenseNumber": "58768788",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Advanced Practice Midwife"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1008",
                    "AssociateFirstName": "sdfsdf",
                    "AssociateLastName": "sdfsdf",
                    "AssociateMiddleInitial": "s",
                    "PhoneNumber": "3333333333",
                    "FaxNumber": "3333333333",
                    "EmailAddress": "rr@ee.com",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1009",
                    "AssociateFirstName": "test",
                    "AssociateLastName": "tt",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "OtherAssociate"
                    }
                  },
                  {
                    "@ID": "1010",
                    "Address": "SS",
                    "Address2": "ss",
                    "City": "hyd",
                    "State": "AL",
                    "Zip": "68678",
                    "PhoneNumber": "4646475858",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Business Arrangement"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Primary Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "444444444",
                  "GroupNumber": "3333333333",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "BusinessArrangement": {
                  "@ID": "1000",
                  "BusinessArrangementName": "Aishwarya",
                  "BusinessArrangementType": "Testing",
                  "TaxID": "868678768",
                  "Address": "SS",
                  "Address2": "ss",
                  "City": "hyd",
                  "State": "AL",
                  "PostalCode": "686786",
                  "PhoneNumber": "4646475858",
                  "Province": "7575"
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "sdhsdh",
                    "Address2": "dshsdh",
                    "City": "sdhsdh",
                    "County": "Boone County",
                    "State": "AR",
                    "PostalCode": "333333333",
                    "EmailAddress": "ee@ee.com",
                    "Country": {
                      "CountryName": "American Samoa"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Primary Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "sdhsdh",
                    "Address2": "dshsdh",
                    "City": "sdhsdh",
                    "AddressType": {
                      "AddressTypeDescription": "Primary Practice Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1004",
                "PracticeName": "ABCD",
                "Address": "PO BOX 123",
                "Address2": "PO BOX NW",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75221",
                "ExtZip": "0123",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "PO BOX 123",
                  "Address2": "PO BOX NW",
                  "City": "DALLAS",
                  "State": "TX",
                  "PostalCode": "752210123",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1005",
                "PracticeName": "test1",
                "Address": "316 25TH ST",
                "City": "SAN DIEGO",
                "State": "AL",
                "Zip": "91901",
                "ExtZip": "1103",
                "County": "Cheyenne County",
                "PhoneNumber": "9874561230",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2018-08-13T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "9874561230",
                "Accessibility": [
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "A",
                    "AssociateLastName": "testing",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "8686787",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "B",
                    "AssociateLastName": "dfgg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "2355252",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Practitioner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "C",
                    "AssociateLastName": "utuy",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "6876876867",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Internist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "D",
                    "AssociateLastName": "urujg",
                    "AssociateMiddleInitial": "t",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Hospice and Palliative Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "ggggg",
                    "AssociateLastName": "ggg",
                    "AssociateMiddleInitial": "g",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "E",
                    "AssociateLastName": "gjkgh",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "67667778",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "F",
                    "AssociateLastName": "kiutg",
                    "AssociateMiddleInitial": "u",
                    "LicenseNumber": "6486683",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Advanced Practice Midwife"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "APN"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "1",
                  "AgeLimitationMinimum": "11",
                  "AgeLimitationMaximum": "22",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "hyderabad",
                  "TaxID": "854648786",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "316 25TH ST",
                    "City": "SAN DIEGO",
                    "County": "Cheyenne County",
                    "State": "AL",
                    "PostalCode": "919011103",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "street1",
                    "Address2": "building",
                    "City": "hyd",
                    "State": "CO",
                    "PostalCode": "97865313",
                    "Country": {
                      "CountryName": "Argentina"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1006",
                "PracticeName": "Test PO box stnd",
                "Address": "1900 K ST NW",
                "Address2": "PO BOXNW 123",
                "City": "WASHINGTON",
                "State": "DC",
                "Zip": "20006",
                "ExtZip": "1110",
                "County": "Barber County",
                "PhoneNumber": "4157235632",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "1",
                "StartDate": "2013-05-14T00:00:00",
                "PracticeLimitationFlag": "1",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "4157235632",
                "Accessibility": [
                  {
                    "@ID": "1002",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Parking Access"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Restroom Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": {
                  "@ID": "1000",
                  "AssociateFirstName": "sfvd",
                  "AssociateLastName": "sxvdx",
                  "TaxIDName": "Group",
                  "AssociateType": {
                    "AssociateTypeDescription": "Office Mgr"
                  }
                },
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Research"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "456465663",
                  "PrimaryFlag": "1",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "1900 K ST NW",
                    "Address2": "PO BOXNW 123",
                    "City": "WASHINGTON",
                    "County": "Barber County",
                    "State": "DC",
                    "PostalCode": "200061110",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Research"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "vbfb",
                    "City": "dfbgb",
                    "State": "KS",
                    "PostalCode": "456674654",
                    "Country": {
                      "CountryName": "Bosnia and Herzegovina"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1007",
                "Address": "123 main street",
                "Address2": "po box nw",
                "City": "dallas",
                "State": "TX",
                "Zip": "75208",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "123 main street",
                  "Address2": "po box nw",
                  "City": "dallas",
                  "State": "TX",
                  "PostalCode": "75208"
                }
              },
              {
                "@ID": "1008",
                "Address": "717 S WATER ST",
                "Address2": "POB 190",
                "City": "LOMIRA",
                "State": "WI",
                "Zip": "53048",
                "ExtZip": "9349",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "717 S WATER ST",
                  "Address2": "POB 190",
                  "City": "LOMIRA",
                  "State": "WI",
                  "PostalCode": "530489349",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1009",
                "PracticeName": "test3",
                "Address": "901 Southwind Road",
                "City": "Springfield",
                "State": "IL",
                "Zip": "62703",
                "County": "DuPage County",
                "PhoneNumber": "0123456789",
                "EmailAddress": "email@email.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2010-06-15T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "0123456789",
                "PhoneExtension": "217786",
                "PatientAppointmentPhoneExtension": "217786",
                "AnsweringServicePhoneExtension": "217786",
                "Accessibility": [
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "Atest",
                    "AssociateLastName": "uj",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "769879796",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "0",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DMD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Cookie",
                    "AssociateLastName": "Monster",
                    "PhoneNumber": "2342342345",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Individual",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1002",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Individual",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "Btest",
                    "AssociateLastName": "tyg",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "687868686",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Athletic Trainer"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "ABA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "CTest",
                    "AssociateLastName": "tuytu",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "6876868",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Pain Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSP"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "DTest",
                    "AssociateLastName": "gjhg",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "798797",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Hospice and Palliative Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSW"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "Etest",
                    "AssociateLastName": "iyiyu",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "987979",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Clinical & Laboratory Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CRNA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "Ftest",
                    "AssociateLastName": "hkjh",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "797897",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Certified First Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1008",
                    "AssociateFirstName": "Gtest",
                    "AssociateLastName": "yiy",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "7970809",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Orthopedic"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AUD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "The Hospital Authority of Chatham County",
                  "TaxID": "586321456",
                  "TaxType": {
                    "TaxTypeDescription": "Individual"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "901 Southwind Road",
                    "City": "Springfield",
                    "County": "DuPage County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "EmailAddress": "email@email.com",
                    "Country": {
                      "CountryName": "Albania"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "901 Southwind Road",
                    "City": "Springfield",
                    "State": "IL",
                    "PostalCode": "62703",
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1010",
                "PracticeName": "po box test stnd PR entered",
                "Address": "123 W MAIN ST",
                "Address2": "POBOX 123",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75208",
                "ExtZip": "1929",
                "County": "Maricopa County",
                "PhoneNumber": "9794874654",
                "EmailAddress": "test@gmail.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2009-06-22T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "9794874654",
                "NPI": "8794641311",
                "PracticeTypeDescription": "Corporation",
                "Accessibility": [
                  {
                    "@ID": "1002",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Parking Access"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Restroom Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "Atesting",
                    "AssociateLastName": "gjhgjh",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "5778946345",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Btesting",
                    "AssociateLastName": "yhkj",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "9879796876",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Supplier"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CRNA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "Ctesting",
                    "AssociateLastName": "ititg",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "686786787",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiologist Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "BT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "DTesting",
                    "AssociateLastName": "gjgh",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "6867867876",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CP"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "ttttt",
                    "AssociateLastName": "gggggg",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "4764757",
                    "LicenseState": "FL",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Athletic Trainer"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MFT"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "testing",
                    "AssociateLastName": "GGKJK",
                    "AssociateMiddleInitial": "h",
                    "PhoneNumber": "5885887686",
                    "FaxNumber": "9779797979",
                    "EmailAddress": "test@gmail.com",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Female Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "976456456",
                  "GroupNumber": "8794641311",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeSpecialty": {
                  "@ID": "1000",
                  "Specialty": {
                    "SpecialtyName": "Behavior Analyst"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "123 W MAIN ST",
                    "Address2": "POBOX 123",
                    "City": "DALLAS",
                    "County": "Maricopa County",
                    "State": "TX",
                    "PostalCode": "752081929",
                    "EmailAddress": "test@gmail.com",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "123 Main st",
                    "Address2": "Office",
                    "City": "hyderabad",
                    "State": "AZ",
                    "PostalCode": "674646445",
                    "Country": {
                      "CountryName": "Andorra"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1011",
                "Address": "PO BOX 123",
                "Address2": "POST OFFICE BOX 123",
                "City": "WOODBRIDGE",
                "State": "VA",
                "Zip": "22194",
                "ExtZip": "0123",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "PO BOX 123",
                  "Address2": "POST OFFICE BOX 123",
                  "City": "WOODBRIDGE",
                  "State": "VA",
                  "PostalCode": "221940123",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1012",
                "PracticeName": "test non-usps",
                "Address": "po box 123",
                "Address2": "1234",
                "City": "test",
                "State": "CA",
                "Zip": "64654",
                "ExtZip": "5646",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "po box 123",
                  "Address2": "1234",
                  "City": "test",
                  "State": "CA",
                  "PostalCode": "646545646",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1013",
                "PracticeName": "aishwarya11",
                "Address": "3803 N ELM ST",
                "Address2": "# 123",
                "City": "GREENSBORO",
                "State": "NC",
                "Zip": "27455",
                "ExtZip": "2593",
                "CurrentlyPracticingFlag": "0",
                "NPI": "4562137890",
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "789988887",
                  "GroupNumber": "4562137890"
                },
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "3803 N ELM ST",
                  "Address2": "# 123",
                  "City": "GREENSBORO",
                  "State": "NC",
                  "PostalCode": "274552593",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1014",
                "Address": "440 JEFFERSON CT",
                "City": "DETROIT",
                "State": "MI",
                "Zip": "48207",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "440 JEFFERSON CT",
                  "City": "DETROIT",
                  "State": "MI",
                  "PostalCode": "48207",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1015",
                "Address": "123 W MAIN ST",
                "Address2": "P O BOX 56",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75208",
                "ExtZip": "1929",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "123 W MAIN ST",
                  "Address2": "P O BOX 56",
                  "City": "DALLAS",
                  "State": "TX",
                  "PostalCode": "752081929",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1016",
                "PracticeName": "Test2",
                "Address": "Street1",
                "Address2": "Office",
                "City": "hyd",
                "State": "AL",
                "Zip": "97864",
                "ExtZip": "6413",
                "County": "Barbour County",
                "PhoneNumber": "9876543210",
                "FaxNumber": "6786461311",
                "EmailAddress": "testt@gmail.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2016-06-07T00:00:00",
                "Coverage24x7Flag": "1",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "1",
                "PatientAppointmentPhoneNumber": "9876543210",
                "W9PracticeName": "tstukjh",
                "PracticeTypeDescription": "Solo Primary Care",
                "PhoneExtension": "555555",
                "PatientAppointmentPhoneExtension": "555555",
                "AnsweringServicePhoneExtension": "555555",
                "PracticeWebsite": "ww.jjj.com",
                "Accessibility": [
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "rrrrrrrr",
                    "AssociateLastName": "rrrrrrrrr",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "test",
                    "AssociateLastName": "tt",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "A",
                    "AssociateLastName": "ggg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "68686868",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "B",
                    "AssociateLastName": "her",
                    "AssociateMiddleInitial": "e",
                    "LicenseNumber": "979464645",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "C",
                    "AssociateLastName": "sdsfs",
                    "AssociateMiddleInitial": "s",
                    "LicenseNumber": "23552525",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DMD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "D",
                    "AssociateLastName": "fse",
                    "AssociateMiddleInitial": "f",
                    "LicenseNumber": "978465464",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "APN"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "E",
                    "AssociateLastName": "kjfhkjh",
                    "AssociateMiddleInitial": "f",
                    "LicenseNumber": "797897978",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "F",
                    "AssociateLastName": "gfdg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "58758696",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Certified First Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "ProviderPracticeHours": {
                  "@ID": "1000",
                  "StartHours": {
                    "Hours": "6:30 am"
                  },
                  "EndHours": {
                    "Hours": "7:00 am"
                  },
                  "DayOfWeek": {
                    "DayOfWeekName": "Monday"
                  },
                  "HoursType": {
                    "HoursTypeDescription": "Office"
                  }
                },
                "Language": {
                  "@ID": "1000",
                  "LanguageType": "Translate",
                  "Language": {
                    "LanguageName": "Afar"
                  }
                },
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Male Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "testing",
                  "TaxID": "868760808",
                  "PrimaryFlag": "1",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeSpecialty": {
                  "@ID": "1000",
                  "Specialty": {
                    "SpecialtyName": "Certified First Assistant"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "Street1",
                    "Address2": "Office",
                    "City": "hyd",
                    "County": "Barbour County",
                    "State": "AL",
                    "PostalCode": "978646413",
                    "Province": "igduhi",
                    "EmailAddress": "testt@gmail.com",
                    "Country": {
                      "CountryName": "Algeria"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "Street1",
                    "Address2": "Office",
                    "City": "hyd",
                    "State": "AL",
                    "PostalCode": "978646413",
                    "Province": "igduhi",
                    "Country": {
                      "CountryName": "Algeria"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              }
            ],
            "Hospital": [
              {
                "@ID": "1000",
                "HospitalName": "Other",
                "NonAHAHospitalName": "Arkham Asylum",
                "Address": "101 Wayne Manor Rd.",
                "City": "Gotham",
                "State": "VA",
                "ZipCode": "22191",
                "PhoneNumber": "2222222222",
                "UnrestrictedPrivilegesFlag": "0",
                "PrivilegeDescription": "Temporary",
                "TemporaryPrivilegesFlag": "1",
                "StaffCategory": "Pending",
                "ApplicationDate": "2019-02-01T00:00:00",
                "FaxNumber": "9072697251",
                "HospitalAffiliationType": {
                  "HospitalAffiliationTypeDescription": "Primary"
                },
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "HospitalName": "Other",
                "NonAHAHospitalName": "Government's Hospital",
                "Address": "2105 East South Boulevard",
                "Address2": "fsgfs",
                "City": "Montgomery",
                "State": "CA",
                "ZipCode": "354456565",
                "PhoneNumber": "6545646556",
                "UnrestrictedPrivilegesFlag": "1",
                "PrivilegeDescription": "Full and unrestricted",
                "TemporaryPrivilegesFlag": "0",
                "StartDate": "2019-02-01T00:00:00",
                "StaffCategory": "Active",
                "HospitalAffiliationType": {
                  "HospitalAffiliationTypeDescription": "Secondary"
                },
                "Country": {
                  "CountryName": "United States"
                }
              }
            ],
            "Insurance": [
              {
                "@ID": "1000",
                "InsuranceCarrierName": "Acceleration National Ins Co",
                "OriginalStartDate": "2018-09-03T00:00:00",
                "StartDate": "2018-10-26T00:00:00",
                "EndDate": "2018-11-16T00:00:00",
                "SelfInsuredFlag": "0",
                "Address": "475 Metro Pl N",
                "City": "Dublin",
                "State": "AR",
                "PostalCode": "43017",
                "PolicyNumber": "978645123",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "22",
                "CoverageAmountAggregate": "55",
                "TailNoseCoverageFlag": "1",
                "UnlimitedCoverageFlag": "1",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Previous Malpractice"
                },
                "InsuranceCoverageType": {
                  "InsuranceCoverageTypeDescription": "Claims Made"
                },
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "InsuranceCarrierName": "MAG Mutual Insurance Co.",
                "StartDate": "2016-11-12T00:00:00",
                "EndDate": "2019-12-12T00:00:00",
                "SelfInsuredFlag": "1",
                "Address": "4565 Hadvogger Blvd.",
                "City": "Savannah",
                "State": "GA",
                "PostalCode": "31406",
                "PhoneNumber": "3216543123",
                "PolicyNumber": "PSL 0104058 13",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "65645",
                "CoverageAmountAggregate": "9885",
                "RetroactiveDate": "2019-11-11T00:00:00",
                "UnlimitedCoverageFlag": "1",
                "FaxNumber": "6549673165",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Current Malpractice"
                }
              },
              {
                "@ID": "1002",
                "InsuranceCarrierName": "MAG Mutual Insurance Co.",
                "StartDate": "2016-11-12T00:00:00",
                "EndDate": "2019-12-12T00:00:00",
                "SelfInsuredFlag": "1",
                "Address": "4565 Hadvogger Blvd.",
                "City": "Savannah",
                "State": "GA",
                "PostalCode": "31406",
                "PhoneNumber": "3216543123",
                "PolicyNumber": "PSL 0104058 13",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "465454654",
                "CoverageAmountAggregate": "554",
                "RetroactiveDate": "2019-11-11T00:00:00",
                "TailNoseCoverageFlag": "0",
                "UnlimitedCoverageFlag": "1",
                "FaxNumber": "6549673165",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Current Malpractice"
                }
              }
            ],
            "WorkHistory": {
              "@ID": "1000",
              "EmployerName": "rrr",
              "StartDate": "2018-07-01T00:00:00",
              "Address": "tyutyutu",
              "City": "gjtyjuyu",
              "State": "AL",
              "PostalCode": "33333333333",
              "CurrentEmployerFlag": "1",
              "StatusDescription": "Present",
              "Country": {
                "CountryName": "American Samoa"
              },
              "WorkHistoryType": {
                "WorkHistoryTypeDescription": "Current"
              }
            },
            "Reference": [
              {
                "@ID": "1000",
                "FirstName": "test",
                "LastName": "uyyt",
                "Address": "fjfm",
                "Address2": "fhjfk",
                "City": "jfjkhk",
                "State": "CO",
                "Province": "76476475",
                "PostalCode": "465474746",
                "PhoneNumber": "6867867867",
                "Title": "ttt",
                "FaxNumber": "5757576879",
                "Relationship": "tttt",
                "YearsKnown": "55",
                "MiddleName": "tt",
                "EmailAddress": "testing@gmail.com",
                "ReferenceType": {
                  "ProviderTypeAbbreviation": "MD"
                },
                "Country": {
                  "CountryName": "Anguilla"
                },
                "Specialty": {
                  "SpecialtyName": "Allergy & Immunology"
                }
              },
              {
                "@ID": "1001",
                "FirstName": "dgfdgd",
                "LastName": "fgdfg",
                "Address": "dfgdfg",
                "Address2": "dfgdfg",
                "City": "dfgdfg",
                "State": "AK",
                "Province": "dfgdf",
                "PostalCode": "222222222",
                "PhoneNumber": "4534564364",
                "FaxNumber": "4564564654",
                "EmailAddress": "rr@ee.com",
                "ReferenceType": {
                  "ProviderTypeAbbreviation": "ACU"
                },
                "Country": {
                  "CountryName": "Albania"
                }
              }
            ],
            "GraduateType": {
              "GraduateTypeDescription": "US/Canadian Graduate"
            },
            "ProviderAddress": {
              "@ID": "1000",
              "Address": "Test",
              "City": "Test",
              "State": "AZ",
              "PostalCode": "789465431",
              "EmailAddress": "Testabc@gmail.com",
              "AddressType": {
                "AddressTypeDescription": "Current Home"
              }
            },
            "ProviderCertification": [
              {
                "@ID": "1000",
                "CertificationFlag": "0",
                "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
              },
              {
                "@ID": "1001",
                "CertificationFlag": "0",
                "CertificationDescription": "Basic Life Support (BLS)"
              },
              {
                "@ID": "1002",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
              },
              {
                "@ID": "1003",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Life Support in OB (ALSO)"
              },
              {
                "@ID": "1004",
                "CertificationFlag": "0",
                "CertificationDescription": "Health Care Provider (Core C)"
              },
              {
                "@ID": "1005",
                "CertificationFlag": "0",
                "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
              },
              {
                "@ID": "1006",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
              },
              {
                "@ID": "1007",
                "CertificationFlag": "0",
                "CertificationDescription": "Neonatal Resuscitation Program (NRS)"
              },
              {
                "@ID": "1008",
                "CertificationFlag": "0",
                "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
              },
              {
                "@ID": "1009",
                "CertificationFlag": "0",
                "CertificationDescription": "Other"
              },
              {
                "@ID": "1010",
                "CertificationFlag": "0",
                "CertificationDescription": "Anesthesia Permit"
              }
            ],
            "CitizenshipCountry": {
              "CountryName": "United States"
            },
            "Military": {
              "@ID": "1000",
              "ReserveGuardFlag": "1",
              "ActiveDuty": "1"
            },
            "MedicalAssociation": [
              {
                "@ID": "1000",
                "AssociationName": "avdg",
                "AssociationType": "Network Denial",
                "GeographicRange": {
                  "GeographicRangeDescription": "Regional"
                }
              },
              {
                "@ID": "1001",
                "AssociationName": "asg",
                "AssociationType": "IPA/PHA",
                "GeographicRange": {
                  "GeographicRangeDescription": "National"
                }
              },
              {
                "@ID": "1002",
                "AssociationName": "asgsa",
                "AssociationType": "Network Denial",
                "GeographicRange": {
                  "GeographicRangeDescription": "Local"
                }
              }
            ]
          })
    }

    if(req.params.id == 123456789){
        res.send({
            "@ProviderID": "123456789",
            "@ProviderAttestID": "96755383",
            "@AttestDate": "2019-07-16T14:05:44",
            "@ID": "1000",
            "LastName": "Bhambhani",
            "FirstName": "Rohit",
            "MiddleName": "M",
            "PrimaryPracticeState": "DC",
            "OtherNameFlag": "1",
            "BirthDate": "2001-10-16T00:00:00",
            "USEligibleFlag": "1",
            "SSN": "132324450",
            "NID": "1336349250",
            "DEAFlag": "0",
            "CDSFlag": "0",
            "UPINFlag": "1",
            "NPIFlag": "1",
            "NPI": "1063485183",
            "MedicareProviderFlag": "0",
            "MedicaidProviderFlag": "0",
            "FellowshipTrainingFlag": "0",
            "SecondarySpecialtyFlag": "1",
            "OtherSpecialtyFlag": "1",
            "HospitalPrivilegeFlag": "1",
            "HospitalAdmittingArrangements": "See Replica for Admitting Arrangement",
            "WorkHistoryGapFlag": "0",
            "ActiveMilitaryFlag": "1",
            "CitizenshipStatus": "United States",
            "VisaNumber": "1366797532",
            "ECFMGFlag": "1",
            "ECFMGNumber": "757555",
            "ECFMGIssueDate": "2018-11-04T00:00:00",
            "HospitalBasedFlag": "0",
            "VisaType": "4654",
            "VisaExpirationDate": "2019-01-18T00:00:00",
            "ECFMGExpirationDate": "2018-12-15T00:00:00",
            "AffiliatedFlag": "1",
            "DelegatedFlag": "0",
            "ProviderType": {
              "ProviderTypeAbbreviation": "DO"
            },
            "OtherName": [
              {
                "@ID": "1000",
                "LastName": "CHANDESH",
                "FirstName": "Aishwarya",
                "MiddleName": "m",
                "Suffix": "I",
                "OtherNameExplanation": "Just for fun"
              },
              {
                "@ID": "1001",
                "LastName": "two",
                "FirstName": "Aishwaryaaa",
                "MiddleName": "two",
                "Suffix": "II",
                "OtherNameExplanation": "My wish"
              },
              {
                "@ID": "1002",
                "LastName": "three",
                "FirstName": "three",
                "MiddleName": "three",
                "Suffix": "III",
                "OtherNameExplanation": "simply"
              },
              {
                "@ID": "1003",
                "LastName": "four",
                "FirstName": "four",
                "MiddleName": "four",
                "Suffix": "IV",
                "OtherNameExplanation": "four my name"
              },
              {
                "@ID": "1004",
                "LastName": "five",
                "FirstName": "five",
                "MiddleName": "five",
                "Suffix": "V",
                "OtherNameExplanation": "five"
              },
              {
                "@ID": "1005",
                "LastName": "ABBAREDDY",
                "FirstName": "Aishwarya",
                "MiddleName": "six",
                "Suffix": "VI",
                "OtherNameExplanation": "six"
              },
              {
                "@ID": "1006",
                "LastName": "RADNOTHY",
                "FirstName": "LOUIS",
                "MiddleName": "seven",
                "Suffix": "Sr",
                "OtherNameExplanation": "seven"
              }
            ],
            "Gender": {
              "GenderDescription": "Male"
            },
            "Language": [
              {
                "@ID": "1000",
                "Language": {
                  "LanguageName": "Afan (Oromo)"
                }
              },
              {
                "@ID": "1001",
                "Language": {
                  "LanguageName": "Afar"
                }
              },
              {
                "@ID": "1002",
                "Language": {
                  "LanguageName": "American Sign Language"
                }
              }
            ],
            "ProviderIdentifier": [
              {
                "@ID": "1000",
                "IdentifierValue": "testingg",
                "IssueDate": "2018-07-16T00:00:00",
                "ExpirationDate": "2019-01-18T00:00:00",
                "Sponsor": "123123",
                "IdentifierType": {
                  "IdentifierTypeDescription": "Temporary Visa"
                }
              },
              {
                "@ID": "1001",
                "IdentifierValue": "34665765787",
                "IdentifierType": {
                  "IdentifierTypeDescription": "Workers Compensation Number"
                }
              }
            ],
            "ProviderLicense": [
              {
                "@ID": "1000",
                "LicenseNumber": "34535435",
                "State": "DC",
                "CurrentlyPracticingFlag": "1",
                "ExpirationDate": "2021-01-01T00:00:00",
                "LicenseType": "APN",
                "IssueDate": "2018-11-11T00:00:00",
                "LicenseUnlimitedFlag": "1",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Current License"
                }
              },
              {
                "@ID": "1001",
                "LicenseNumber": "77777777",
                "State": "OK",
                "CurrentlyPracticingFlag": "0",
                "ExpirationDate": "2019-01-24T00:00:00",
                "LicenseType": "ABA",
                "IssueDate": "2018-11-04T00:00:00",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Inactive/Expired"
                }
              },
              {
                "@ID": "1002",
                "LicenseNumber": "8888888",
                "State": "AK",
                "CurrentlyPracticingFlag": "0",
                "ExpirationDate": "2018-11-25T00:00:00",
                "LicenseType": "AA",
                "IssueDate": "2018-11-04T00:00:00",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Previous License"
                }
              },
              {
                "@ID": "1003",
                "LicenseNumber": "5555555555",
                "State": "CA",
                "CurrentlyPracticingFlag": "1",
                "ExpirationDate": "2018-11-21T00:00:00",
                "LicenseType": "APN",
                "IssueDate": "2018-11-05T00:00:00"
              }
            ],
            "Education": [
              {
                "@ID": "1000",
                "InstitutionName": "Athens-Limestone Hospital (Athens, AL)",
                "Address": "700 West Market Street",
                "City": "Athens",
                "State": "AL",
                "PostalCode": "35611",
                "StartDate": "2018-01-01T00:00:00",
                "EndDate": "2018-12-01T00:00:00",
                "HospitalDepartmentName": "Department",
                "ProgramCompletedFlag": "1",
                "CompletionDate": "2018-10-06T00:00:00",
                "PhoneNumber": "2562339292",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "Department",
                "EducationTypeName": "Internship",
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "InstitutionName": "Anoka-Metro Reg Treatment Ctr",
                "Address": "3300 Fourth Avenue North",
                "City": "Anoka",
                "State": "MN",
                "PostalCode": "55303",
                "StartDate": "2018-02-01T00:00:00",
                "EndDate": "2018-12-01T00:00:00",
                "HospitalDepartmentName": "Department",
                "ProgramCompletedFlag": "0",
                "IncompleteExplanation": "Department",
                "PhoneNumber": "6127124000",
                "DisciplinaryActionFlag": "0",
                "EducationTypeName": "Internship",
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1002",
                "InstitutionName": "Adams County Memorial Hospital (Decatur, IN)",
                "Address": "805 High Street",
                "City": "Decatur",
                "State": "IN",
                "PostalCode": "46733",
                "StartDate": "2015-07-01T00:00:00",
                "EndDate": "2017-07-01T00:00:00",
                "ProgramCompletedFlag": "0",
                "CertificateAwarded": "dfh",
                "IncompleteExplanation": "Test",
                "PhoneNumber": "2197242145",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "tt",
                "EducationTypeName": "Professional School",
                "Country": {
                  "CountryName": "United States"
                },
                "Degree": {
                  "DegreeAbbreviation": "MBBCH"
                }
              },
              {
                "@ID": "1003",
                "InstitutionName": "Dalhousie University Faculty of Dentistry",
                "Address": "5981 University Avenue",
                "City": "Halifax",
                "Province": "Nova Scotia",
                "State": "IA",
                "PostalCode": "B3H-3J5",
                "StartDate": "2001-12-01T00:00:00",
                "EndDate": "2019-11-01T00:00:00",
                "ProgramCompletedFlag": "1",
                "CompletionDate": "2018-08-19T00:00:00",
                "CertificateAwarded": "dfhdf",
                "PhoneNumber": "9024946734",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "dssdfs",
                "EducationTypeName": "Professional School",
                "Country": {
                  "CountryName": "Canada"
                },
                "Degree": {
                  "DegreeAbbreviation": "APRN"
                },
                "InstitutionType": {
                  "InstitutionTypeDescription": "Dental School"
                }
              },
              {
                "@ID": "1004",
                "InstitutionName": "Faculty Of Medicine",
                "Address": "Avicenna State Medical Institute Of Kabul",
                "City": "Kabul",
                "State": "AR",
                "DisciplinaryActionFlag": "0",
                "EducationTypeName": "Undergraduate School",
                "Country": {
                  "CountryName": "Afghanistan"
                },
                "InstitutionType": {
                  "InstitutionTypeDescription": "Fifth Pathway NonUS Medic"
                }
              }
            ],
            "Degree": [
              {
                "@ID": "1000",
                "Degree": {
                  "DegreeAbbreviation": "MBBCH"
                }
              },
              {
                "@ID": "1001",
                "Degree": {
                  "DegreeAbbreviation": "APRN"
                }
              }
            ],
            "Specialty": [
              {
                "@ID": "1000",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-09-01T00:00:00",
                "FailedBoardExamFlag": "0",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "1",
                "IntendApplyCertificationDate": "2019-10-01T00:00:00",
                "ExamAcceptedFlag": "0",
                "AdmissibilityExpirationDate": "2019-05-01T00:00:00",
                "IntendingBoardFlag": "1",
                "SpecialtyPercent": "77",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Primary"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Intending to Sit for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Addiction Medicine"
                },
                "NUCCTaxonomyCode": "2084A0401X"
              },
              {
                "@ID": "1001",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-10-01T00:00:00",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "0",
                "ExamAcceptedFlag": "0",
                "NoCertificationExplanation": "fdhdf",
                "AdmissibilityExpirationDate": "2019-06-01T00:00:00",
                "SpecialtyPercent": "77",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Secondary"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine"
                }
              },
              {
                "@ID": "1002",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-10-01T00:00:00",
                "ApplyCertificationFlag": "1",
                "IntendApplyCertificationFlag": "0",
                "ExamAcceptedFlag": "1",
                "AdmissibilityExpirationDate": "2019-06-01T00:00:00",
                "NotEligibleBoardFlag": "1",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Other"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Applied for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine: Family Practice"
                },
                "NUCCTaxonomyCode": "207QA0000X"
              },
              {
                "@ID": "1003",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-06-01T00:00:00",
                "FailedBoardExamFlag": "0",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "1",
                "IntendApplyCertificationDate": "2019-10-01T00:00:00",
                "ExamAcceptedFlag": "0",
                "AdmissibilityExpirationDate": "2019-10-01T00:00:00",
                "IntendingBoardFlag": "1",
                "SpecialtyPercent": "66",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Other"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Intending to Sit for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine: Internal Medicine"
                },
                "NUCCTaxonomyCode": "207RA0000X"
              }
            ],
            "Associate": [
              {
                "@ID": "1000",
                "AssociateFirstName": "gtrh",
                "AssociateLastName": "thr",
                "AssociateMiddleInitial": "t",
                "Address": "5981 University Avenue",
                "City": "Halifax",
                "State": "AR",
                "PhoneNumber": "9024946734",
                "AssociateType": {
                  "AssociateTypeDescription": "Credentialing Contact"
                },
                "Country": {
                  "CountryName": "Afghanistan"
                }
              },
              {
                "@ID": "1001",
                "AssociateFirstName": "sdgfsdg",
                "AssociateLastName": "fgdfg",
                "AssociateMiddleInitial": "d",
                "Address": "gfdgdf",
                "Address2": "fgdfgh",
                "City": "dsfgdsfg",
                "State": "AR",
                "PostalCode": "234525345",
                "Province": "dfgdfg",
                "PhoneNumber": "3213424234",
                "FaxNumber": "2354235234",
                "EmailAddress": "ee@rr.com",
                "AssociateType": {
                  "AssociateTypeDescription": "Credentialing Contact"
                },
                "Country": {
                  "CountryName": "American Samoa"
                }
              }
            ],
            "Practice": [
              {
                "@ID": "1000",
                "PracticeName": "rk",
                "Address": "101 W UNIVERSITY AVE",
                "Address2": "FGD",
                "City": "CHAMPAIGN",
                "State": "IL",
                "Zip": "61820",
                "ExtZip": "3909",
                "CurrentlyPracticingFlag": "0",
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "123456567"
                },
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "101 W UNIVERSITY AVE",
                  "Address2": "FGD",
                  "City": "CHAMPAIGN",
                  "State": "IL",
                  "PostalCode": "618203909",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1001",
                "PracticeName": "aishwarya",
                "Address": "aishwarya",
                "Address2": "aishwarya",
                "City": "washington",
                "State": "AR",
                "Zip": "23354",
                "ExtZip": "5566",
                "County": "Boone County",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "aishwarya",
                  "Address2": "aishwarya",
                  "City": "washington",
                  "County": "Boone County",
                  "State": "AR",
                  "PostalCode": "233545566",
                  "Province": "54656565",
                  "Country": {
                    "CountryName": "American Samoa"
                  }
                }
              },
              {
                "@ID": "1002",
                "PracticeName": "Pnmae",
                "Address": "901 Southwind Road",
                "Address2": "po box 123",
                "City": "Springfield",
                "State": "IL",
                "Zip": "62703",
                "County": "Bond County",
                "PhoneNumber": "4373473473",
                "EmailAddress": "email@email.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2019-04-29T00:00:00",
                "ADAApprovedFlag": "1",
                "MinorityBusinessFlag": "1",
                "InterpreterAvailableFlag": "1",
                "PatientAppointmentPhoneNumber": "4373473473",
                "ListInDirectoryFlag": "1",
                "W9PracticeName": "w9",
                "NPI": "3463474374",
                "PracticeTypeDescription": "Group/Single",
                "DepartmentName": "sdf",
                "PhoneExtension": "217786",
                "PatientAppointmentPhoneExtension": "217786",
                "AnsweringServicePhoneExtension": "217786",
                "PracticeWebsite": "sdf",
                "Accessibility": [
                  {
                    "@ID": "1001",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1009",
                    "AccessibilityFlag": "1",
                    "OtherAccessibilityDescription": "rtu",
                    "Accessibility": {
                      "AccessibilityDescription": "Other Transportation"
                    }
                  },
                  {
                    "@ID": "1015",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Child Care"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "sdfg",
                    "AssociateLastName": "dfhd",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "Cookie",
                    "AssociateLastName": "Monster",
                    "PhoneNumber": "2342342345",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "Uncle Moneybags",
                    "AssociateLastName": "Uncle Moneybags",
                    "AssociateMiddleInitial": "U",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "Zip": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Billing Contact"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "Uncle Moneybags",
                    "AssociateLastName": "Uncle Moneybags",
                    "AssociateMiddleInitial": "U",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "Zip": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "3454567756",
                    "EmailAddress": "billing@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Payment Contact"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "ProviderCertifiedFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "ExpirationDate": "2019-04-29T00:00:00",
                    "ProviderCertifiedFlag": "1",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "ProviderCertifiedFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "ProviderPracticeHours": [
                  {
                    "@ID": "1000",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Monday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1001",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Tuesday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1002",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Wednesday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1003",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Thursday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1004",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Friday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1005",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Saturday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1006",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Sunday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  }
                ],
                "Language": [
                  {
                    "@ID": "1000",
                    "LanguageType": "Speak",
                    "Language": {
                      "LanguageName": "Afar"
                    }
                  },
                  {
                    "@ID": "1001",
                    "LanguageType": "Translate",
                    "Language": {
                      "LanguageName": "American Sign Language"
                    }
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "OtherLimitationDescription": "ruru",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Female Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  }
                ],
                "Service": [
                  {
                    "@ID": "1000",
                    "ServiceProvidedFlag": "1",
                    "LaboratoryCertificationProgram": "Testing2",
                    "Service": {
                      "ServiceName": "Laboratory"
                    }
                  },
                  {
                    "@ID": "1002",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Radiology"
                    }
                  },
                  {
                    "@ID": "1003",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "EKG"
                    }
                  },
                  {
                    "@ID": "1007",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Allergy Skin Testing"
                    }
                  },
                  {
                    "@ID": "1009",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Drawing Blood"
                    }
                  },
                  {
                    "@ID": "1017",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Cardiac Stress Tests"
                    }
                  },
                  {
                    "@ID": "1019",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Anesthesia"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "The Hospital Authority of Chatham County",
                  "TaxID": "586321456",
                  "PrimaryFlag": "1",
                  "GroupNumber": "3463474374",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "901 Southwind Road",
                    "Address2": "po box 123",
                    "City": "Springfield",
                    "County": "Bond County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "Province": "sdf",
                    "EmailAddress": "email@email.com",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "901 Southwind Road",
                    "Address2": "po box 123",
                    "City": "Springfield",
                    "County": "Bond County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "Province": "sdf",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  },
                  {
                    "@ID": "1002",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "PostalCode": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "AddressType": {
                      "AddressTypeDescription": "Billing"
                    }
                  },
                  {
                    "@ID": "1003",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "PostalCode": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "3454567756",
                    "AnsweringServicePhoneNumber": "5484585485",
                    "EmailAddress": "billing@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "AddressType": {
                      "AddressTypeDescription": "Claims Payment"
                    }
                  }
                ]
              },
              {
                "@ID": "1003",
                "PracticeName": "test",
                "Address": "sdhsdh",
                "Address2": "dshsdh",
                "City": "sdhsdh",
                "State": "AR",
                "Zip": "33333",
                "ExtZip": "3333",
                "County": "Boone County",
                "PhoneNumber": "1361367067",
                "EmailAddress": "ee@ee.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "1",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2010-01-04T00:00:00",
                "PracticeLimitationFlag": "1",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PhoneNumber2": "1361367067",
                "PatientAppointmentPhoneNumber": "1361367067",
                "W9PracticeName": "sfsdfdxf",
                "NPI": "3333333333",
                "Accessibility": [
                  {
                    "@ID": "1000",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Meets fire, safety, and sanitation requirements"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "ttt",
                    "AssociateLastName": "fvjh",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "OtherAssociate"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Gname",
                    "AssociateLastName": "Lname",
                    "AssociateMiddleInitial": "G",
                    "LicenseNumber": "465",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Independent Medical Examiner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "ATest",
                    "AssociateLastName": "khjgkj",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "58578797",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Clinical & Laboratory Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "BTest",
                    "AssociateLastName": "hhh",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "7977977",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "CTest",
                    "AssociateLastName": "jj",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "687685757",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiologist Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "HOS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "DTest",
                    "AssociateLastName": "yui",
                    "AssociateMiddleInitial": "i",
                    "LicenseNumber": "9689797",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Practitioner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSW"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "ETest",
                    "AssociateLastName": "ooo",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "87686878",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Independent Medical Examiner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "HOS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "FTest",
                    "AssociateLastName": "sdfsdfsd",
                    "AssociateMiddleInitial": "d",
                    "LicenseNumber": "58768788",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Advanced Practice Midwife"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1008",
                    "AssociateFirstName": "sdfsdf",
                    "AssociateLastName": "sdfsdf",
                    "AssociateMiddleInitial": "s",
                    "PhoneNumber": "3333333333",
                    "FaxNumber": "3333333333",
                    "EmailAddress": "rr@ee.com",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1009",
                    "AssociateFirstName": "test",
                    "AssociateLastName": "tt",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "OtherAssociate"
                    }
                  },
                  {
                    "@ID": "1010",
                    "Address": "SS",
                    "Address2": "ss",
                    "City": "hyd",
                    "State": "AL",
                    "Zip": "68678",
                    "PhoneNumber": "4646475858",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Business Arrangement"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Primary Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "444444444",
                  "GroupNumber": "3333333333",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "BusinessArrangement": {
                  "@ID": "1000",
                  "BusinessArrangementName": "Aishwarya",
                  "BusinessArrangementType": "Testing",
                  "TaxID": "868678768",
                  "Address": "SS",
                  "Address2": "ss",
                  "City": "hyd",
                  "State": "AL",
                  "PostalCode": "686786",
                  "PhoneNumber": "4646475858",
                  "Province": "7575"
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "sdhsdh",
                    "Address2": "dshsdh",
                    "City": "sdhsdh",
                    "County": "Boone County",
                    "State": "AR",
                    "PostalCode": "333333333",
                    "EmailAddress": "ee@ee.com",
                    "Country": {
                      "CountryName": "American Samoa"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Primary Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "sdhsdh",
                    "Address2": "dshsdh",
                    "City": "sdhsdh",
                    "AddressType": {
                      "AddressTypeDescription": "Primary Practice Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1004",
                "PracticeName": "ABCD",
                "Address": "PO BOX 123",
                "Address2": "PO BOX NW",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75221",
                "ExtZip": "0123",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "PO BOX 123",
                  "Address2": "PO BOX NW",
                  "City": "DALLAS",
                  "State": "TX",
                  "PostalCode": "752210123",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1005",
                "PracticeName": "test1",
                "Address": "316 25TH ST",
                "City": "SAN DIEGO",
                "State": "AL",
                "Zip": "91901",
                "ExtZip": "1103",
                "County": "Cheyenne County",
                "PhoneNumber": "9874561230",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2018-08-13T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "9874561230",
                "Accessibility": [
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "A",
                    "AssociateLastName": "testing",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "8686787",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "B",
                    "AssociateLastName": "dfgg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "2355252",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Practitioner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "C",
                    "AssociateLastName": "utuy",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "6876876867",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Internist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "D",
                    "AssociateLastName": "urujg",
                    "AssociateMiddleInitial": "t",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Hospice and Palliative Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "ggggg",
                    "AssociateLastName": "ggg",
                    "AssociateMiddleInitial": "g",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "E",
                    "AssociateLastName": "gjkgh",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "67667778",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "F",
                    "AssociateLastName": "kiutg",
                    "AssociateMiddleInitial": "u",
                    "LicenseNumber": "6486683",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Advanced Practice Midwife"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "APN"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "1",
                  "AgeLimitationMinimum": "11",
                  "AgeLimitationMaximum": "22",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "hyderabad",
                  "TaxID": "854648786",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "316 25TH ST",
                    "City": "SAN DIEGO",
                    "County": "Cheyenne County",
                    "State": "AL",
                    "PostalCode": "919011103",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "street1",
                    "Address2": "building",
                    "City": "hyd",
                    "State": "CO",
                    "PostalCode": "97865313",
                    "Country": {
                      "CountryName": "Argentina"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1006",
                "PracticeName": "Test PO box stnd",
                "Address": "1900 K ST NW",
                "Address2": "PO BOXNW 123",
                "City": "WASHINGTON",
                "State": "DC",
                "Zip": "20006",
                "ExtZip": "1110",
                "County": "Barber County",
                "PhoneNumber": "4157235632",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "1",
                "StartDate": "2013-05-14T00:00:00",
                "PracticeLimitationFlag": "1",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "4157235632",
                "Accessibility": [
                  {
                    "@ID": "1002",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Parking Access"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Restroom Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": {
                  "@ID": "1000",
                  "AssociateFirstName": "sfvd",
                  "AssociateLastName": "sxvdx",
                  "TaxIDName": "Group",
                  "AssociateType": {
                    "AssociateTypeDescription": "Office Mgr"
                  }
                },
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Research"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "456465663",
                  "PrimaryFlag": "1",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "1900 K ST NW",
                    "Address2": "PO BOXNW 123",
                    "City": "WASHINGTON",
                    "County": "Barber County",
                    "State": "DC",
                    "PostalCode": "200061110",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Research"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "vbfb",
                    "City": "dfbgb",
                    "State": "KS",
                    "PostalCode": "456674654",
                    "Country": {
                      "CountryName": "Bosnia and Herzegovina"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1007",
                "Address": "123 main street",
                "Address2": "po box nw",
                "City": "dallas",
                "State": "TX",
                "Zip": "75208",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "123 main street",
                  "Address2": "po box nw",
                  "City": "dallas",
                  "State": "TX",
                  "PostalCode": "75208"
                }
              },
              {
                "@ID": "1008",
                "Address": "717 S WATER ST",
                "Address2": "POB 190",
                "City": "LOMIRA",
                "State": "WI",
                "Zip": "53048",
                "ExtZip": "9349",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "717 S WATER ST",
                  "Address2": "POB 190",
                  "City": "LOMIRA",
                  "State": "WI",
                  "PostalCode": "530489349",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1009",
                "PracticeName": "test3",
                "Address": "901 Southwind Road",
                "City": "Springfield",
                "State": "IL",
                "Zip": "62703",
                "County": "DuPage County",
                "PhoneNumber": "0123456789",
                "EmailAddress": "email@email.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2010-06-15T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "0123456789",
                "PhoneExtension": "217786",
                "PatientAppointmentPhoneExtension": "217786",
                "AnsweringServicePhoneExtension": "217786",
                "Accessibility": [
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "Atest",
                    "AssociateLastName": "uj",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "769879796",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "0",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DMD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Cookie",
                    "AssociateLastName": "Monster",
                    "PhoneNumber": "2342342345",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Individual",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1002",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Individual",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "Btest",
                    "AssociateLastName": "tyg",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "687868686",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Athletic Trainer"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "ABA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "CTest",
                    "AssociateLastName": "tuytu",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "6876868",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Pain Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSP"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "DTest",
                    "AssociateLastName": "gjhg",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "798797",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Hospice and Palliative Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSW"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "Etest",
                    "AssociateLastName": "iyiyu",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "987979",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Clinical & Laboratory Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CRNA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "Ftest",
                    "AssociateLastName": "hkjh",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "797897",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Certified First Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1008",
                    "AssociateFirstName": "Gtest",
                    "AssociateLastName": "yiy",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "7970809",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Orthopedic"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AUD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "The Hospital Authority of Chatham County",
                  "TaxID": "586321456",
                  "TaxType": {
                    "TaxTypeDescription": "Individual"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "901 Southwind Road",
                    "City": "Springfield",
                    "County": "DuPage County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "EmailAddress": "email@email.com",
                    "Country": {
                      "CountryName": "Albania"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "901 Southwind Road",
                    "City": "Springfield",
                    "State": "IL",
                    "PostalCode": "62703",
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1010",
                "PracticeName": "po box test stnd PR entered",
                "Address": "123 W MAIN ST",
                "Address2": "POBOX 123",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75208",
                "ExtZip": "1929",
                "County": "Maricopa County",
                "PhoneNumber": "9794874654",
                "EmailAddress": "test@gmail.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2009-06-22T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "9794874654",
                "NPI": "8794641311",
                "PracticeTypeDescription": "Corporation",
                "Accessibility": [
                  {
                    "@ID": "1002",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Parking Access"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Restroom Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "Atesting",
                    "AssociateLastName": "gjhgjh",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "5778946345",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Btesting",
                    "AssociateLastName": "yhkj",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "9879796876",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Supplier"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CRNA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "Ctesting",
                    "AssociateLastName": "ititg",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "686786787",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiologist Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "BT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "DTesting",
                    "AssociateLastName": "gjgh",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "6867867876",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CP"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "ttttt",
                    "AssociateLastName": "gggggg",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "4764757",
                    "LicenseState": "FL",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Athletic Trainer"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MFT"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "testing",
                    "AssociateLastName": "GGKJK",
                    "AssociateMiddleInitial": "h",
                    "PhoneNumber": "5885887686",
                    "FaxNumber": "9779797979",
                    "EmailAddress": "test@gmail.com",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Female Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "976456456",
                  "GroupNumber": "8794641311",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeSpecialty": {
                  "@ID": "1000",
                  "Specialty": {
                    "SpecialtyName": "Behavior Analyst"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "123 W MAIN ST",
                    "Address2": "POBOX 123",
                    "City": "DALLAS",
                    "County": "Maricopa County",
                    "State": "TX",
                    "PostalCode": "752081929",
                    "EmailAddress": "test@gmail.com",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "123 Main st",
                    "Address2": "Office",
                    "City": "hyderabad",
                    "State": "AZ",
                    "PostalCode": "674646445",
                    "Country": {
                      "CountryName": "Andorra"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1011",
                "Address": "PO BOX 123",
                "Address2": "POST OFFICE BOX 123",
                "City": "WOODBRIDGE",
                "State": "VA",
                "Zip": "22194",
                "ExtZip": "0123",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "PO BOX 123",
                  "Address2": "POST OFFICE BOX 123",
                  "City": "WOODBRIDGE",
                  "State": "VA",
                  "PostalCode": "221940123",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1012",
                "PracticeName": "test non-usps",
                "Address": "po box 123",
                "Address2": "1234",
                "City": "test",
                "State": "CA",
                "Zip": "64654",
                "ExtZip": "5646",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "po box 123",
                  "Address2": "1234",
                  "City": "test",
                  "State": "CA",
                  "PostalCode": "646545646",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1013",
                "PracticeName": "aishwarya11",
                "Address": "3803 N ELM ST",
                "Address2": "# 123",
                "City": "GREENSBORO",
                "State": "NC",
                "Zip": "27455",
                "ExtZip": "2593",
                "CurrentlyPracticingFlag": "0",
                "NPI": "4562137890",
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "789988887",
                  "GroupNumber": "4562137890"
                },
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "3803 N ELM ST",
                  "Address2": "# 123",
                  "City": "GREENSBORO",
                  "State": "NC",
                  "PostalCode": "274552593",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1014",
                "Address": "440 JEFFERSON CT",
                "City": "DETROIT",
                "State": "MI",
                "Zip": "48207",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "440 JEFFERSON CT",
                  "City": "DETROIT",
                  "State": "MI",
                  "PostalCode": "48207",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1015",
                "Address": "123 W MAIN ST",
                "Address2": "P O BOX 56",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75208",
                "ExtZip": "1929",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "123 W MAIN ST",
                  "Address2": "P O BOX 56",
                  "City": "DALLAS",
                  "State": "TX",
                  "PostalCode": "752081929",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1016",
                "PracticeName": "Test2",
                "Address": "Street1",
                "Address2": "Office",
                "City": "hyd",
                "State": "AL",
                "Zip": "97864",
                "ExtZip": "6413",
                "County": "Barbour County",
                "PhoneNumber": "9876543210",
                "FaxNumber": "6786461311",
                "EmailAddress": "testt@gmail.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2016-06-07T00:00:00",
                "Coverage24x7Flag": "1",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "1",
                "PatientAppointmentPhoneNumber": "9876543210",
                "W9PracticeName": "tstukjh",
                "PracticeTypeDescription": "Solo Primary Care",
                "PhoneExtension": "555555",
                "PatientAppointmentPhoneExtension": "555555",
                "AnsweringServicePhoneExtension": "555555",
                "PracticeWebsite": "ww.jjj.com",
                "Accessibility": [
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "rrrrrrrr",
                    "AssociateLastName": "rrrrrrrrr",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "test",
                    "AssociateLastName": "tt",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "A",
                    "AssociateLastName": "ggg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "68686868",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "B",
                    "AssociateLastName": "her",
                    "AssociateMiddleInitial": "e",
                    "LicenseNumber": "979464645",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "C",
                    "AssociateLastName": "sdsfs",
                    "AssociateMiddleInitial": "s",
                    "LicenseNumber": "23552525",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DMD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "D",
                    "AssociateLastName": "fse",
                    "AssociateMiddleInitial": "f",
                    "LicenseNumber": "978465464",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "APN"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "E",
                    "AssociateLastName": "kjfhkjh",
                    "AssociateMiddleInitial": "f",
                    "LicenseNumber": "797897978",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "F",
                    "AssociateLastName": "gfdg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "58758696",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Certified First Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "ProviderPracticeHours": {
                  "@ID": "1000",
                  "StartHours": {
                    "Hours": "6:30 am"
                  },
                  "EndHours": {
                    "Hours": "7:00 am"
                  },
                  "DayOfWeek": {
                    "DayOfWeekName": "Monday"
                  },
                  "HoursType": {
                    "HoursTypeDescription": "Office"
                  }
                },
                "Language": {
                  "@ID": "1000",
                  "LanguageType": "Translate",
                  "Language": {
                    "LanguageName": "Afar"
                  }
                },
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Male Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "testing",
                  "TaxID": "868760808",
                  "PrimaryFlag": "1",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeSpecialty": {
                  "@ID": "1000",
                  "Specialty": {
                    "SpecialtyName": "Certified First Assistant"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "Street1",
                    "Address2": "Office",
                    "City": "hyd",
                    "County": "Barbour County",
                    "State": "AL",
                    "PostalCode": "978646413",
                    "Province": "igduhi",
                    "EmailAddress": "testt@gmail.com",
                    "Country": {
                      "CountryName": "Algeria"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "Street1",
                    "Address2": "Office",
                    "City": "hyd",
                    "State": "AL",
                    "PostalCode": "978646413",
                    "Province": "igduhi",
                    "Country": {
                      "CountryName": "Algeria"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              }
            ],
            "Hospital": [
              {
                "@ID": "1000",
                "HospitalName": "Other",
                "NonAHAHospitalName": "Arkham Asylum",
                "Address": "101 Wayne Manor Rd.",
                "City": "Gotham",
                "State": "VA",
                "ZipCode": "22191",
                "PhoneNumber": "2222222222",
                "UnrestrictedPrivilegesFlag": "0",
                "PrivilegeDescription": "Temporary",
                "TemporaryPrivilegesFlag": "1",
                "StaffCategory": "Pending",
                "ApplicationDate": "2019-02-01T00:00:00",
                "FaxNumber": "9072697251",
                "HospitalAffiliationType": {
                  "HospitalAffiliationTypeDescription": "Primary"
                },
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "HospitalName": "Other",
                "NonAHAHospitalName": "Government's Hospital",
                "Address": "2105 East South Boulevard",
                "Address2": "fsgfs",
                "City": "Montgomery",
                "State": "CA",
                "ZipCode": "354456565",
                "PhoneNumber": "6545646556",
                "UnrestrictedPrivilegesFlag": "1",
                "PrivilegeDescription": "Full and unrestricted",
                "TemporaryPrivilegesFlag": "0",
                "StartDate": "2019-02-01T00:00:00",
                "StaffCategory": "Active",
                "HospitalAffiliationType": {
                  "HospitalAffiliationTypeDescription": "Secondary"
                },
                "Country": {
                  "CountryName": "United States"
                }
              }
            ],
            "Insurance": [
              {
                "@ID": "1000",
                "InsuranceCarrierName": "Acceleration National Ins Co",
                "OriginalStartDate": "2018-09-03T00:00:00",
                "StartDate": "2018-10-26T00:00:00",
                "EndDate": "2018-11-16T00:00:00",
                "SelfInsuredFlag": "0",
                "Address": "475 Metro Pl N",
                "City": "Dublin",
                "State": "AR",
                "PostalCode": "43017",
                "PolicyNumber": "978645123",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "22",
                "CoverageAmountAggregate": "55",
                "TailNoseCoverageFlag": "1",
                "UnlimitedCoverageFlag": "1",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Previous Malpractice"
                },
                "InsuranceCoverageType": {
                  "InsuranceCoverageTypeDescription": "Claims Made"
                },
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "InsuranceCarrierName": "MAG Mutual Insurance Co.",
                "StartDate": "2016-11-12T00:00:00",
                "EndDate": "2019-12-12T00:00:00",
                "SelfInsuredFlag": "1",
                "Address": "4565 Hadvogger Blvd.",
                "City": "Savannah",
                "State": "GA",
                "PostalCode": "31406",
                "PhoneNumber": "3216543123",
                "PolicyNumber": "PSL 0104058 13",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "65645",
                "CoverageAmountAggregate": "9885",
                "RetroactiveDate": "2019-11-11T00:00:00",
                "UnlimitedCoverageFlag": "1",
                "FaxNumber": "6549673165",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Current Malpractice"
                }
              },
              {
                "@ID": "1002",
                "InsuranceCarrierName": "MAG Mutual Insurance Co.",
                "StartDate": "2016-11-12T00:00:00",
                "EndDate": "2019-12-12T00:00:00",
                "SelfInsuredFlag": "1",
                "Address": "4565 Hadvogger Blvd.",
                "City": "Savannah",
                "State": "GA",
                "PostalCode": "31406",
                "PhoneNumber": "3216543123",
                "PolicyNumber": "PSL 0104058 13",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "465454654",
                "CoverageAmountAggregate": "554",
                "RetroactiveDate": "2019-11-11T00:00:00",
                "TailNoseCoverageFlag": "0",
                "UnlimitedCoverageFlag": "1",
                "FaxNumber": "6549673165",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Current Malpractice"
                }
              }
            ],
            "WorkHistory": {
              "@ID": "1000",
              "EmployerName": "rrr",
              "StartDate": "2018-07-01T00:00:00",
              "Address": "tyutyutu",
              "City": "gjtyjuyu",
              "State": "AL",
              "PostalCode": "33333333333",
              "CurrentEmployerFlag": "1",
              "StatusDescription": "Present",
              "Country": {
                "CountryName": "American Samoa"
              },
              "WorkHistoryType": {
                "WorkHistoryTypeDescription": "Current"
              }
            },
            "Reference": [
              {
                "@ID": "1000",
                "FirstName": "test",
                "LastName": "uyyt",
                "Address": "fjfm",
                "Address2": "fhjfk",
                "City": "jfjkhk",
                "State": "CO",
                "Province": "76476475",
                "PostalCode": "465474746",
                "PhoneNumber": "6867867867",
                "Title": "ttt",
                "FaxNumber": "5757576879",
                "Relationship": "tttt",
                "YearsKnown": "55",
                "MiddleName": "tt",
                "EmailAddress": "testing@gmail.com",
                "ReferenceType": {
                  "ProviderTypeAbbreviation": "MD"
                },
                "Country": {
                  "CountryName": "Anguilla"
                },
                "Specialty": {
                  "SpecialtyName": "Allergy & Immunology"
                }
              },
              {
                "@ID": "1001",
                "FirstName": "dgfdgd",
                "LastName": "fgdfg",
                "Address": "dfgdfg",
                "Address2": "dfgdfg",
                "City": "dfgdfg",
                "State": "AK",
                "Province": "dfgdf",
                "PostalCode": "222222222",
                "PhoneNumber": "4534564364",
                "FaxNumber": "4564564654",
                "EmailAddress": "rr@ee.com",
                "ReferenceType": {
                  "ProviderTypeAbbreviation": "ACU"
                },
                "Country": {
                  "CountryName": "Albania"
                }
              }
            ],
            "GraduateType": {
              "GraduateTypeDescription": "US/Canadian Graduate"
            },
            "ProviderAddress": {
              "@ID": "1000",
              "Address": "Test",
              "City": "Test",
              "State": "AZ",
              "PostalCode": "789465431",
              "EmailAddress": "Testabc@gmail.com",
              "AddressType": {
                "AddressTypeDescription": "Current Home"
              }
            },
            "ProviderCertification": [
              {
                "@ID": "1000",
                "CertificationFlag": "0",
                "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
              },
              {
                "@ID": "1001",
                "CertificationFlag": "0",
                "CertificationDescription": "Basic Life Support (BLS)"
              },
              {
                "@ID": "1002",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
              },
              {
                "@ID": "1003",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Life Support in OB (ALSO)"
              },
              {
                "@ID": "1004",
                "CertificationFlag": "0",
                "CertificationDescription": "Health Care Provider (Core C)"
              },
              {
                "@ID": "1005",
                "CertificationFlag": "0",
                "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
              },
              {
                "@ID": "1006",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
              },
              {
                "@ID": "1007",
                "CertificationFlag": "0",
                "CertificationDescription": "Neonatal Resuscitation Program (NRS)"
              },
              {
                "@ID": "1008",
                "CertificationFlag": "0",
                "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
              },
              {
                "@ID": "1009",
                "CertificationFlag": "0",
                "CertificationDescription": "Other"
              },
              {
                "@ID": "1010",
                "CertificationFlag": "0",
                "CertificationDescription": "Anesthesia Permit"
              }
            ],
            "CitizenshipCountry": {
              "CountryName": "United States"
            },
            "Military": {
              "@ID": "1000",
              "ReserveGuardFlag": "1",
              "ActiveDuty": "1"
            },
            "MedicalAssociation": [
              {
                "@ID": "1000",
                "AssociationName": "avdg",
                "AssociationType": "Network Denial",
                "GeographicRange": {
                  "GeographicRangeDescription": "Regional"
                }
              },
              {
                "@ID": "1001",
                "AssociationName": "asg",
                "AssociationType": "IPA/PHA",
                "GeographicRange": {
                  "GeographicRangeDescription": "National"
                }
              },
              {
                "@ID": "1002",
                "AssociationName": "asgsa",
                "AssociationType": "Network Denial",
                "GeographicRange": {
                  "GeographicRangeDescription": "Local"
                }
              }
            ]
          })
    }


    if(req.params.id == 300000000){
        res.send({
            "@ProviderID": "300000000",
            "@ProviderAttestID": "96755383",
            "@AttestDate": "2019-07-16T14:05:44",
            "@ID": "1000",
            "LastName": "Tse",
            "FirstName": "Alva",
            "MiddleName": "",
            "PrimaryPracticeState": "DC",
            "OtherNameFlag": "1",
            "BirthDate": "2001-10-16T00:00:00",
            "USEligibleFlag": "1",
            "SSN": "132324450",
            "NID": "1336349250",
            "DEAFlag": "0",
            "CDSFlag": "0",
            "UPINFlag": "1",
            "NPIFlag": "1",
            "NPI": "1063485183",
            "MedicareProviderFlag": "0",
            "MedicaidProviderFlag": "0",
            "FellowshipTrainingFlag": "0",
            "SecondarySpecialtyFlag": "1",
            "OtherSpecialtyFlag": "1",
            "HospitalPrivilegeFlag": "1",
            "HospitalAdmittingArrangements": "See Replica for Admitting Arrangement",
            "WorkHistoryGapFlag": "0",
            "ActiveMilitaryFlag": "1",
            "CitizenshipStatus": "United States",
            "VisaNumber": "1366797532",
            "ECFMGFlag": "1",
            "ECFMGNumber": "757555",
            "ECFMGIssueDate": "2018-11-04T00:00:00",
            "HospitalBasedFlag": "0",
            "VisaType": "4654",
            "VisaExpirationDate": "2019-01-18T00:00:00",
            "ECFMGExpirationDate": "2018-12-15T00:00:00",
            "AffiliatedFlag": "1",
            "DelegatedFlag": "0",
            "ProviderType": {
              "ProviderTypeAbbreviation": "DO"
            },
            "OtherName": [
              {
                "@ID": "1000",
                "LastName": "CHANDESH",
                "FirstName": "Aishwarya",
                "MiddleName": "m",
                "Suffix": "I",
                "OtherNameExplanation": "Just for fun"
              },
              {
                "@ID": "1001",
                "LastName": "two",
                "FirstName": "Aishwaryaaa",
                "MiddleName": "two",
                "Suffix": "II",
                "OtherNameExplanation": "My wish"
              },
              {
                "@ID": "1002",
                "LastName": "three",
                "FirstName": "three",
                "MiddleName": "three",
                "Suffix": "III",
                "OtherNameExplanation": "simply"
              },
              {
                "@ID": "1003",
                "LastName": "four",
                "FirstName": "four",
                "MiddleName": "four",
                "Suffix": "IV",
                "OtherNameExplanation": "four my name"
              },
              {
                "@ID": "1004",
                "LastName": "five",
                "FirstName": "five",
                "MiddleName": "five",
                "Suffix": "V",
                "OtherNameExplanation": "five"
              },
              {
                "@ID": "1005",
                "LastName": "ABBAREDDY",
                "FirstName": "Aishwarya",
                "MiddleName": "six",
                "Suffix": "VI",
                "OtherNameExplanation": "six"
              },
              {
                "@ID": "1006",
                "LastName": "RADNOTHY",
                "FirstName": "LOUIS",
                "MiddleName": "seven",
                "Suffix": "Sr",
                "OtherNameExplanation": "seven"
              }
            ],
            "Gender": {
              "GenderDescription": "Male"
            },
            "Language": [
              {
                "@ID": "1000",
                "Language": {
                  "LanguageName": "Afan (Oromo)"
                }
              },
              {
                "@ID": "1001",
                "Language": {
                  "LanguageName": "Afar"
                }
              },
              {
                "@ID": "1002",
                "Language": {
                  "LanguageName": "American Sign Language"
                }
              }
            ],
            "ProviderIdentifier": [
              {
                "@ID": "1000",
                "IdentifierValue": "testingg",
                "IssueDate": "2018-07-16T00:00:00",
                "ExpirationDate": "2019-01-18T00:00:00",
                "Sponsor": "123123",
                "IdentifierType": {
                  "IdentifierTypeDescription": "Temporary Visa"
                }
              },
              {
                "@ID": "1001",
                "IdentifierValue": "34665765787",
                "IdentifierType": {
                  "IdentifierTypeDescription": "Workers Compensation Number"
                }
              }
            ],
            "ProviderLicense": [
              {
                "@ID": "1000",
                "LicenseNumber": "34535435",
                "State": "DC",
                "CurrentlyPracticingFlag": "1",
                "ExpirationDate": "2021-01-01T00:00:00",
                "LicenseType": "APN",
                "IssueDate": "2018-11-11T00:00:00",
                "LicenseUnlimitedFlag": "1",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Current License"
                }
              },
              {
                "@ID": "1001",
                "LicenseNumber": "77777777",
                "State": "OK",
                "CurrentlyPracticingFlag": "0",
                "ExpirationDate": "2019-01-24T00:00:00",
                "LicenseType": "ABA",
                "IssueDate": "2018-11-04T00:00:00",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Inactive/Expired"
                }
              },
              {
                "@ID": "1002",
                "LicenseNumber": "8888888",
                "State": "AK",
                "CurrentlyPracticingFlag": "0",
                "ExpirationDate": "2018-11-25T00:00:00",
                "LicenseType": "AA",
                "IssueDate": "2018-11-04T00:00:00",
                "LicenseStatus": {
                  "LicenseStatusDescription": "Previous License"
                }
              },
              {
                "@ID": "1003",
                "LicenseNumber": "5555555555",
                "State": "CA",
                "CurrentlyPracticingFlag": "1",
                "ExpirationDate": "2018-11-21T00:00:00",
                "LicenseType": "APN",
                "IssueDate": "2018-11-05T00:00:00"
              }
            ],
            "Education": [
              {
                "@ID": "1000",
                "InstitutionName": "Athens-Limestone Hospital (Athens, AL)",
                "Address": "700 West Market Street",
                "City": "Athens",
                "State": "AL",
                "PostalCode": "35611",
                "StartDate": "2018-01-01T00:00:00",
                "EndDate": "2018-12-01T00:00:00",
                "HospitalDepartmentName": "Department",
                "ProgramCompletedFlag": "1",
                "CompletionDate": "2018-10-06T00:00:00",
                "PhoneNumber": "2562339292",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "Department",
                "EducationTypeName": "Internship",
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "InstitutionName": "Anoka-Metro Reg Treatment Ctr",
                "Address": "3300 Fourth Avenue North",
                "City": "Anoka",
                "State": "MN",
                "PostalCode": "55303",
                "StartDate": "2018-02-01T00:00:00",
                "EndDate": "2018-12-01T00:00:00",
                "HospitalDepartmentName": "Department",
                "ProgramCompletedFlag": "0",
                "IncompleteExplanation": "Department",
                "PhoneNumber": "6127124000",
                "DisciplinaryActionFlag": "0",
                "EducationTypeName": "Internship",
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1002",
                "InstitutionName": "Adams County Memorial Hospital (Decatur, IN)",
                "Address": "805 High Street",
                "City": "Decatur",
                "State": "IN",
                "PostalCode": "46733",
                "StartDate": "2015-07-01T00:00:00",
                "EndDate": "2017-07-01T00:00:00",
                "ProgramCompletedFlag": "0",
                "CertificateAwarded": "dfh",
                "IncompleteExplanation": "Test",
                "PhoneNumber": "2197242145",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "tt",
                "EducationTypeName": "Professional School",
                "Country": {
                  "CountryName": "United States"
                },
                "Degree": {
                  "DegreeAbbreviation": "MBBCH"
                }
              },
              {
                "@ID": "1003",
                "InstitutionName": "Dalhousie University Faculty of Dentistry",
                "Address": "5981 University Avenue",
                "City": "Halifax",
                "Province": "Nova Scotia",
                "State": "IA",
                "PostalCode": "B3H-3J5",
                "StartDate": "2001-12-01T00:00:00",
                "EndDate": "2019-11-01T00:00:00",
                "ProgramCompletedFlag": "1",
                "CompletionDate": "2018-08-19T00:00:00",
                "CertificateAwarded": "dfhdf",
                "PhoneNumber": "9024946734",
                "DisciplinaryActionFlag": "1",
                "DisciplinaryActionExplanation": "dssdfs",
                "EducationTypeName": "Professional School",
                "Country": {
                  "CountryName": "Canada"
                },
                "Degree": {
                  "DegreeAbbreviation": "APRN"
                },
                "InstitutionType": {
                  "InstitutionTypeDescription": "Dental School"
                }
              },
              {
                "@ID": "1004",
                "InstitutionName": "Faculty Of Medicine",
                "Address": "Avicenna State Medical Institute Of Kabul",
                "City": "Kabul",
                "State": "AR",
                "DisciplinaryActionFlag": "0",
                "EducationTypeName": "Undergraduate School",
                "Country": {
                  "CountryName": "Afghanistan"
                },
                "InstitutionType": {
                  "InstitutionTypeDescription": "Fifth Pathway NonUS Medic"
                }
              }
            ],
            "Degree": [
              {
                "@ID": "1000",
                "Degree": {
                  "DegreeAbbreviation": "MBBCH"
                }
              },
              {
                "@ID": "1001",
                "Degree": {
                  "DegreeAbbreviation": "APRN"
                }
              }
            ],
            "Specialty": [
              {
                "@ID": "1000",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-09-01T00:00:00",
                "FailedBoardExamFlag": "0",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "1",
                "IntendApplyCertificationDate": "2019-10-01T00:00:00",
                "ExamAcceptedFlag": "0",
                "AdmissibilityExpirationDate": "2019-05-01T00:00:00",
                "IntendingBoardFlag": "1",
                "SpecialtyPercent": "77",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Primary"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Intending to Sit for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Addiction Medicine"
                },
                "NUCCTaxonomyCode": "2084A0401X"
              },
              {
                "@ID": "1001",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-10-01T00:00:00",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "0",
                "ExamAcceptedFlag": "0",
                "NoCertificationExplanation": "fdhdf",
                "AdmissibilityExpirationDate": "2019-06-01T00:00:00",
                "SpecialtyPercent": "77",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Secondary"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine"
                }
              },
              {
                "@ID": "1002",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-10-01T00:00:00",
                "ApplyCertificationFlag": "1",
                "IntendApplyCertificationFlag": "0",
                "ExamAcceptedFlag": "1",
                "AdmissibilityExpirationDate": "2019-06-01T00:00:00",
                "NotEligibleBoardFlag": "1",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Other"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Applied for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine: Family Practice"
                },
                "NUCCTaxonomyCode": "207QA0000X"
              },
              {
                "@ID": "1003",
                "BoardCertifiedFlag": "0",
                "FutureBoardExamDate": "2019-06-01T00:00:00",
                "FailedBoardExamFlag": "0",
                "ApplyCertificationFlag": "0",
                "IntendApplyCertificationFlag": "1",
                "IntendApplyCertificationDate": "2019-10-01T00:00:00",
                "ExamAcceptedFlag": "0",
                "AdmissibilityExpirationDate": "2019-10-01T00:00:00",
                "IntendingBoardFlag": "1",
                "SpecialtyPercent": "66",
                "SpecialtyType": {
                  "SpecialtyTypeDescription": "Other"
                },
                "NonCertifiedStatus": {
                  "NonCertifiedStatusDescription": "Intending to Sit for Boards"
                },
                "Specialty": {
                  "SpecialtyName": "Adolescent Medicine: Internal Medicine"
                },
                "NUCCTaxonomyCode": "207RA0000X"
              }
            ],
            "Associate": [
              {
                "@ID": "1000",
                "AssociateFirstName": "gtrh",
                "AssociateLastName": "thr",
                "AssociateMiddleInitial": "t",
                "Address": "5981 University Avenue",
                "City": "Halifax",
                "State": "AR",
                "PhoneNumber": "9024946734",
                "AssociateType": {
                  "AssociateTypeDescription": "Credentialing Contact"
                },
                "Country": {
                  "CountryName": "Afghanistan"
                }
              },
              {
                "@ID": "1001",
                "AssociateFirstName": "sdgfsdg",
                "AssociateLastName": "fgdfg",
                "AssociateMiddleInitial": "d",
                "Address": "gfdgdf",
                "Address2": "fgdfgh",
                "City": "dsfgdsfg",
                "State": "AR",
                "PostalCode": "234525345",
                "Province": "dfgdfg",
                "PhoneNumber": "3213424234",
                "FaxNumber": "2354235234",
                "EmailAddress": "ee@rr.com",
                "AssociateType": {
                  "AssociateTypeDescription": "Credentialing Contact"
                },
                "Country": {
                  "CountryName": "American Samoa"
                }
              }
            ],
            "Practice": [
              {
                "@ID": "1000",
                "PracticeName": "rk",
                "Address": "101 W UNIVERSITY AVE",
                "Address2": "FGD",
                "City": "CHAMPAIGN",
                "State": "IL",
                "Zip": "61820",
                "ExtZip": "3909",
                "CurrentlyPracticingFlag": "0",
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "123456567"
                },
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "101 W UNIVERSITY AVE",
                  "Address2": "FGD",
                  "City": "CHAMPAIGN",
                  "State": "IL",
                  "PostalCode": "618203909",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1001",
                "PracticeName": "aishwarya",
                "Address": "aishwarya",
                "Address2": "aishwarya",
                "City": "washington",
                "State": "AR",
                "Zip": "23354",
                "ExtZip": "5566",
                "County": "Boone County",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "aishwarya",
                  "Address2": "aishwarya",
                  "City": "washington",
                  "County": "Boone County",
                  "State": "AR",
                  "PostalCode": "233545566",
                  "Province": "54656565",
                  "Country": {
                    "CountryName": "American Samoa"
                  }
                }
              },
              {
                "@ID": "1002",
                "PracticeName": "Pnmae",
                "Address": "901 Southwind Road",
                "Address2": "po box 123",
                "City": "Springfield",
                "State": "IL",
                "Zip": "62703",
                "County": "Bond County",
                "PhoneNumber": "4373473473",
                "EmailAddress": "email@email.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2019-04-29T00:00:00",
                "ADAApprovedFlag": "1",
                "MinorityBusinessFlag": "1",
                "InterpreterAvailableFlag": "1",
                "PatientAppointmentPhoneNumber": "4373473473",
                "ListInDirectoryFlag": "1",
                "W9PracticeName": "w9",
                "NPI": "3463474374",
                "PracticeTypeDescription": "Group/Single",
                "DepartmentName": "sdf",
                "PhoneExtension": "217786",
                "PatientAppointmentPhoneExtension": "217786",
                "AnsweringServicePhoneExtension": "217786",
                "PracticeWebsite": "sdf",
                "Accessibility": [
                  {
                    "@ID": "1001",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1009",
                    "AccessibilityFlag": "1",
                    "OtherAccessibilityDescription": "rtu",
                    "Accessibility": {
                      "AccessibilityDescription": "Other Transportation"
                    }
                  },
                  {
                    "@ID": "1015",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Child Care"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "sdfg",
                    "AssociateLastName": "dfhd",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "Cookie",
                    "AssociateLastName": "Monster",
                    "PhoneNumber": "2342342345",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "Uncle Moneybags",
                    "AssociateLastName": "Uncle Moneybags",
                    "AssociateMiddleInitial": "U",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "Zip": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Billing Contact"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "Uncle Moneybags",
                    "AssociateLastName": "Uncle Moneybags",
                    "AssociateMiddleInitial": "U",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "Zip": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "3454567756",
                    "EmailAddress": "billing@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Payment Contact"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "ProviderCertifiedFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "ExpirationDate": "2019-04-29T00:00:00",
                    "ProviderCertifiedFlag": "1",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "ProviderCertifiedFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "ProviderPracticeHours": [
                  {
                    "@ID": "1000",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Monday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1001",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Tuesday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1002",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Wednesday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1003",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Thursday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1004",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Friday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1005",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Saturday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  },
                  {
                    "@ID": "1006",
                    "StartHours": {
                      "Hours": "none"
                    },
                    "EndHours": {
                      "Hours": "none"
                    },
                    "DayOfWeek": {
                      "DayOfWeekName": "Sunday"
                    },
                    "HoursType": {
                      "HoursTypeDescription": "Office"
                    }
                  }
                ],
                "Language": [
                  {
                    "@ID": "1000",
                    "LanguageType": "Speak",
                    "Language": {
                      "LanguageName": "Afar"
                    }
                  },
                  {
                    "@ID": "1001",
                    "LanguageType": "Translate",
                    "Language": {
                      "LanguageName": "American Sign Language"
                    }
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "OtherLimitationDescription": "ruru",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Female Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  }
                ],
                "Service": [
                  {
                    "@ID": "1000",
                    "ServiceProvidedFlag": "1",
                    "LaboratoryCertificationProgram": "Testing2",
                    "Service": {
                      "ServiceName": "Laboratory"
                    }
                  },
                  {
                    "@ID": "1002",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Radiology"
                    }
                  },
                  {
                    "@ID": "1003",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "EKG"
                    }
                  },
                  {
                    "@ID": "1007",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Allergy Skin Testing"
                    }
                  },
                  {
                    "@ID": "1009",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Drawing Blood"
                    }
                  },
                  {
                    "@ID": "1017",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Cardiac Stress Tests"
                    }
                  },
                  {
                    "@ID": "1019",
                    "ServiceProvidedFlag": "1",
                    "Service": {
                      "ServiceName": "Anesthesia"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "The Hospital Authority of Chatham County",
                  "TaxID": "586321456",
                  "PrimaryFlag": "1",
                  "GroupNumber": "3463474374",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "901 Southwind Road",
                    "Address2": "po box 123",
                    "City": "Springfield",
                    "County": "Bond County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "Province": "sdf",
                    "EmailAddress": "email@email.com",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "901 Southwind Road",
                    "Address2": "po box 123",
                    "City": "Springfield",
                    "County": "Bond County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "Province": "sdf",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  },
                  {
                    "@ID": "1002",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "PostalCode": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "AddressType": {
                      "AddressTypeDescription": "Billing"
                    }
                  },
                  {
                    "@ID": "1003",
                    "Address": "1740 W Taylor Street",
                    "City": "Chicago",
                    "State": "IL",
                    "PostalCode": "60612",
                    "PhoneNumber": "3423422342",
                    "FaxNumber": "3454567756",
                    "AnsweringServicePhoneNumber": "5484585485",
                    "EmailAddress": "billing@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "AddressType": {
                      "AddressTypeDescription": "Claims Payment"
                    }
                  }
                ]
              },
              {
                "@ID": "1003",
                "PracticeName": "test",
                "Address": "sdhsdh",
                "Address2": "dshsdh",
                "City": "sdhsdh",
                "State": "AR",
                "Zip": "33333",
                "ExtZip": "3333",
                "County": "Boone County",
                "PhoneNumber": "1361367067",
                "EmailAddress": "ee@ee.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "1",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2010-01-04T00:00:00",
                "PracticeLimitationFlag": "1",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PhoneNumber2": "1361367067",
                "PatientAppointmentPhoneNumber": "1361367067",
                "W9PracticeName": "sfsdfdxf",
                "NPI": "3333333333",
                "Accessibility": [
                  {
                    "@ID": "1000",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Meets fire, safety, and sanitation requirements"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "ttt",
                    "AssociateLastName": "fvjh",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "OtherAssociate"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Gname",
                    "AssociateLastName": "Lname",
                    "AssociateMiddleInitial": "G",
                    "LicenseNumber": "465",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Independent Medical Examiner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "ATest",
                    "AssociateLastName": "khjgkj",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "58578797",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Clinical & Laboratory Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "BTest",
                    "AssociateLastName": "hhh",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "7977977",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "CTest",
                    "AssociateLastName": "jj",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "687685757",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiologist Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "HOS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "DTest",
                    "AssociateLastName": "yui",
                    "AssociateMiddleInitial": "i",
                    "LicenseNumber": "9689797",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Practitioner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSW"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "ETest",
                    "AssociateLastName": "ooo",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "87686878",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Independent Medical Examiner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "HOS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "FTest",
                    "AssociateLastName": "sdfsdfsd",
                    "AssociateMiddleInitial": "d",
                    "LicenseNumber": "58768788",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Advanced Practice Midwife"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1008",
                    "AssociateFirstName": "sdfsdf",
                    "AssociateLastName": "sdfsdf",
                    "AssociateMiddleInitial": "s",
                    "PhoneNumber": "3333333333",
                    "FaxNumber": "3333333333",
                    "EmailAddress": "rr@ee.com",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1009",
                    "AssociateFirstName": "test",
                    "AssociateLastName": "tt",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "OtherAssociate"
                    }
                  },
                  {
                    "@ID": "1010",
                    "Address": "SS",
                    "Address2": "ss",
                    "City": "hyd",
                    "State": "AL",
                    "Zip": "68678",
                    "PhoneNumber": "4646475858",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Business Arrangement"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Primary Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "444444444",
                  "GroupNumber": "3333333333",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "BusinessArrangement": {
                  "@ID": "1000",
                  "BusinessArrangementName": "Aishwarya",
                  "BusinessArrangementType": "Testing",
                  "TaxID": "868678768",
                  "Address": "SS",
                  "Address2": "ss",
                  "City": "hyd",
                  "State": "AL",
                  "PostalCode": "686786",
                  "PhoneNumber": "4646475858",
                  "Province": "7575"
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "sdhsdh",
                    "Address2": "dshsdh",
                    "City": "sdhsdh",
                    "County": "Boone County",
                    "State": "AR",
                    "PostalCode": "333333333",
                    "EmailAddress": "ee@ee.com",
                    "Country": {
                      "CountryName": "American Samoa"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Primary Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "sdhsdh",
                    "Address2": "dshsdh",
                    "City": "sdhsdh",
                    "AddressType": {
                      "AddressTypeDescription": "Primary Practice Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1004",
                "PracticeName": "ABCD",
                "Address": "PO BOX 123",
                "Address2": "PO BOX NW",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75221",
                "ExtZip": "0123",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "PO BOX 123",
                  "Address2": "PO BOX NW",
                  "City": "DALLAS",
                  "State": "TX",
                  "PostalCode": "752210123",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1005",
                "PracticeName": "test1",
                "Address": "316 25TH ST",
                "City": "SAN DIEGO",
                "State": "AL",
                "Zip": "91901",
                "ExtZip": "1103",
                "County": "Cheyenne County",
                "PhoneNumber": "9874561230",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2018-08-13T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "9874561230",
                "Accessibility": [
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "A",
                    "AssociateLastName": "testing",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "8686787",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "B",
                    "AssociateLastName": "dfgg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "2355252",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Practitioner"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "C",
                    "AssociateLastName": "utuy",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "6876876867",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Internist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "D",
                    "AssociateLastName": "urujg",
                    "AssociateMiddleInitial": "t",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Hospice and Palliative Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "ggggg",
                    "AssociateLastName": "ggg",
                    "AssociateMiddleInitial": "g",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "E",
                    "AssociateLastName": "gjkgh",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "67667778",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "F",
                    "AssociateLastName": "kiutg",
                    "AssociateMiddleInitial": "u",
                    "LicenseNumber": "6486683",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Advanced Practice Midwife"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "APN"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "1",
                  "AgeLimitationMinimum": "11",
                  "AgeLimitationMaximum": "22",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "hyderabad",
                  "TaxID": "854648786",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "316 25TH ST",
                    "City": "SAN DIEGO",
                    "County": "Cheyenne County",
                    "State": "AL",
                    "PostalCode": "919011103",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "street1",
                    "Address2": "building",
                    "City": "hyd",
                    "State": "CO",
                    "PostalCode": "97865313",
                    "Country": {
                      "CountryName": "Argentina"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1006",
                "PracticeName": "Test PO box stnd",
                "Address": "1900 K ST NW",
                "Address2": "PO BOXNW 123",
                "City": "WASHINGTON",
                "State": "DC",
                "Zip": "20006",
                "ExtZip": "1110",
                "County": "Barber County",
                "PhoneNumber": "4157235632",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "1",
                "StartDate": "2013-05-14T00:00:00",
                "PracticeLimitationFlag": "1",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "4157235632",
                "Accessibility": [
                  {
                    "@ID": "1002",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Parking Access"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Restroom Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": {
                  "@ID": "1000",
                  "AssociateFirstName": "sfvd",
                  "AssociateLastName": "sxvdx",
                  "TaxIDName": "Group",
                  "AssociateType": {
                    "AssociateTypeDescription": "Office Mgr"
                  }
                },
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Research"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "456465663",
                  "PrimaryFlag": "1",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "1900 K ST NW",
                    "Address2": "PO BOXNW 123",
                    "City": "WASHINGTON",
                    "County": "Barber County",
                    "State": "DC",
                    "PostalCode": "200061110",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Research"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "vbfb",
                    "City": "dfbgb",
                    "State": "KS",
                    "PostalCode": "456674654",
                    "Country": {
                      "CountryName": "Bosnia and Herzegovina"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1007",
                "Address": "123 main street",
                "Address2": "po box nw",
                "City": "dallas",
                "State": "TX",
                "Zip": "75208",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "123 main street",
                  "Address2": "po box nw",
                  "City": "dallas",
                  "State": "TX",
                  "PostalCode": "75208"
                }
              },
              {
                "@ID": "1008",
                "Address": "717 S WATER ST",
                "Address2": "POB 190",
                "City": "LOMIRA",
                "State": "WI",
                "Zip": "53048",
                "ExtZip": "9349",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "717 S WATER ST",
                  "Address2": "POB 190",
                  "City": "LOMIRA",
                  "State": "WI",
                  "PostalCode": "530489349",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1009",
                "PracticeName": "test3",
                "Address": "901 Southwind Road",
                "City": "Springfield",
                "State": "IL",
                "Zip": "62703",
                "County": "DuPage County",
                "PhoneNumber": "0123456789",
                "EmailAddress": "email@email.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2010-06-15T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "0123456789",
                "PhoneExtension": "217786",
                "PatientAppointmentPhoneExtension": "217786",
                "AnsweringServicePhoneExtension": "217786",
                "Accessibility": [
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "Atest",
                    "AssociateLastName": "uj",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "769879796",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "0",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DMD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Cookie",
                    "AssociateLastName": "Monster",
                    "PhoneNumber": "2342342345",
                    "FaxNumber": "1233455443",
                    "EmailAddress": "monster@email.com",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Individual",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1002",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "TaxIDName": "Individual",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "Btest",
                    "AssociateLastName": "tyg",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "687868686",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Athletic Trainer"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "ABA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "CTest",
                    "AssociateLastName": "tuytu",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "6876868",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Pain Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSP"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "DTest",
                    "AssociateLastName": "gjhg",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "798797",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiology, Hospice and Palliative Medicine"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CSW"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "Etest",
                    "AssociateLastName": "iyiyu",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "987979",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Clinical & Laboratory Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CRNA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "Ftest",
                    "AssociateLastName": "hkjh",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "797897",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Certified First Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1008",
                    "AssociateFirstName": "Gtest",
                    "AssociateLastName": "yiy",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "7970809",
                    "CheckPayableTo": "University Of Illinois Hospital and Health Systems",
                    "CoverageFlag": "1",
                    "TaxIDName": "Individual",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Chiropractor, Orthopedic"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AUD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Not Applicable"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "The Hospital Authority of Chatham County",
                  "TaxID": "586321456",
                  "TaxType": {
                    "TaxTypeDescription": "Individual"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "901 Southwind Road",
                    "City": "Springfield",
                    "County": "DuPage County",
                    "State": "IL",
                    "PostalCode": "62703",
                    "EmailAddress": "email@email.com",
                    "Country": {
                      "CountryName": "Albania"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "901 Southwind Road",
                    "City": "Springfield",
                    "State": "IL",
                    "PostalCode": "62703",
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1010",
                "PracticeName": "po box test stnd PR entered",
                "Address": "123 W MAIN ST",
                "Address2": "POBOX 123",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75208",
                "ExtZip": "1929",
                "County": "Maricopa County",
                "PhoneNumber": "9794874654",
                "EmailAddress": "test@gmail.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2009-06-22T00:00:00",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "1",
                "InterpreterAvailableFlag": "0",
                "PatientAppointmentPhoneNumber": "9794874654",
                "NPI": "8794641311",
                "PracticeTypeDescription": "Corporation",
                "Accessibility": [
                  {
                    "@ID": "1002",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Parking Access"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Handicapped Restroom Access"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "Atesting",
                    "AssociateLastName": "gjhgjh",
                    "AssociateMiddleInitial": "t",
                    "LicenseNumber": "5778946345",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "Btesting",
                    "AssociateLastName": "yhkj",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "9879796876",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist, Assistive Technology Supplier"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CRNA"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "Ctesting",
                    "AssociateLastName": "ititg",
                    "AssociateMiddleInitial": "h",
                    "LicenseNumber": "686786787",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Anesthesiologist Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Associate"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "BT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Associate"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "DTesting",
                    "AssociateLastName": "gjgh",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "6867867876",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Audiologist"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "CP"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "ttttt",
                    "AssociateLastName": "gggggg",
                    "AssociateMiddleInitial": "y",
                    "LicenseNumber": "4764757",
                    "LicenseState": "FL",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Athletic Trainer"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MFT"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "testing",
                    "AssociateLastName": "GGKJK",
                    "AssociateMiddleInitial": "h",
                    "PhoneNumber": "5885887686",
                    "FaxNumber": "9779797979",
                    "EmailAddress": "test@gmail.com",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Female Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "976456456",
                  "GroupNumber": "8794641311",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeSpecialty": {
                  "@ID": "1000",
                  "Specialty": {
                    "SpecialtyName": "Behavior Analyst"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "123 W MAIN ST",
                    "Address2": "POBOX 123",
                    "City": "DALLAS",
                    "County": "Maricopa County",
                    "State": "TX",
                    "PostalCode": "752081929",
                    "EmailAddress": "test@gmail.com",
                    "Country": {
                      "CountryName": "United States"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "123 Main st",
                    "Address2": "Office",
                    "City": "hyderabad",
                    "State": "AZ",
                    "PostalCode": "674646445",
                    "Country": {
                      "CountryName": "Andorra"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              },
              {
                "@ID": "1011",
                "Address": "PO BOX 123",
                "Address2": "POST OFFICE BOX 123",
                "City": "WOODBRIDGE",
                "State": "VA",
                "Zip": "22194",
                "ExtZip": "0123",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "PO BOX 123",
                  "Address2": "POST OFFICE BOX 123",
                  "City": "WOODBRIDGE",
                  "State": "VA",
                  "PostalCode": "221940123",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1012",
                "PracticeName": "test non-usps",
                "Address": "po box 123",
                "Address2": "1234",
                "City": "test",
                "State": "CA",
                "Zip": "64654",
                "ExtZip": "5646",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "po box 123",
                  "Address2": "1234",
                  "City": "test",
                  "State": "CA",
                  "PostalCode": "646545646",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1013",
                "PracticeName": "aishwarya11",
                "Address": "3803 N ELM ST",
                "Address2": "# 123",
                "City": "GREENSBORO",
                "State": "NC",
                "Zip": "27455",
                "ExtZip": "2593",
                "CurrentlyPracticingFlag": "0",
                "NPI": "4562137890",
                "Tax": {
                  "@ID": "1000",
                  "TaxID": "789988887",
                  "GroupNumber": "4562137890"
                },
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "3803 N ELM ST",
                  "Address2": "# 123",
                  "City": "GREENSBORO",
                  "State": "NC",
                  "PostalCode": "274552593",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1014",
                "Address": "440 JEFFERSON CT",
                "City": "DETROIT",
                "State": "MI",
                "Zip": "48207",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "440 JEFFERSON CT",
                  "City": "DETROIT",
                  "State": "MI",
                  "PostalCode": "48207",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1015",
                "Address": "123 W MAIN ST",
                "Address2": "P O BOX 56",
                "City": "DALLAS",
                "State": "TX",
                "Zip": "75208",
                "ExtZip": "1929",
                "CurrentlyPracticingFlag": "0",
                "PracticeAddress": {
                  "@ID": "1000",
                  "Address": "123 W MAIN ST",
                  "Address2": "P O BOX 56",
                  "City": "DALLAS",
                  "State": "TX",
                  "PostalCode": "752081929",
                  "Country": {
                    "CountryName": "United States"
                  }
                }
              },
              {
                "@ID": "1016",
                "PracticeName": "Test2",
                "Address": "Street1",
                "Address2": "Office",
                "City": "hyd",
                "State": "AL",
                "Zip": "97864",
                "ExtZip": "6413",
                "County": "Barbour County",
                "PhoneNumber": "9876543210",
                "FaxNumber": "6786461311",
                "EmailAddress": "testt@gmail.com",
                "CorrespondenceFlag": "1",
                "OtherAssociatesFlag": "0",
                "CurrentlyPracticingFlag": "0",
                "StartDate": "2016-06-07T00:00:00",
                "Coverage24x7Flag": "1",
                "PracticeLimitationFlag": "0",
                "ADAApprovedFlag": "0",
                "InterpreterAvailableFlag": "1",
                "PatientAppointmentPhoneNumber": "9876543210",
                "W9PracticeName": "tstukjh",
                "PracticeTypeDescription": "Solo Primary Care",
                "PhoneExtension": "555555",
                "PatientAppointmentPhoneExtension": "555555",
                "AnsweringServicePhoneExtension": "555555",
                "PracticeWebsite": "ww.jjj.com",
                "Accessibility": [
                  {
                    "@ID": "1005",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Public Transportation"
                    }
                  },
                  {
                    "@ID": "1010",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "TTY Service"
                    }
                  },
                  {
                    "@ID": "1011",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "ASL Service"
                    }
                  },
                  {
                    "@ID": "1012",
                    "AccessibilityFlag": "1",
                    "Accessibility": {
                      "AccessibilityDescription": "Mental/Physical Impairments"
                    }
                  }
                ],
                "Associate": [
                  {
                    "@ID": "1000",
                    "AssociateFirstName": "rrrrrrrr",
                    "AssociateLastName": "rrrrrrrrr",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Mid-Level Practitioner"
                    }
                  },
                  {
                    "@ID": "1001",
                    "AssociateFirstName": "test",
                    "AssociateLastName": "tt",
                    "TaxIDName": "Group",
                    "AssociateType": {
                      "AssociateTypeDescription": "Office Mgr"
                    }
                  },
                  {
                    "@ID": "1002",
                    "AssociateFirstName": "A",
                    "AssociateLastName": "ggg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "68686868",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1003",
                    "AssociateFirstName": "B",
                    "AssociateLastName": "her",
                    "AssociateMiddleInitial": "e",
                    "LicenseNumber": "979464645",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "MD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1004",
                    "AssociateFirstName": "C",
                    "AssociateLastName": "sdsfs",
                    "AssociateMiddleInitial": "s",
                    "LicenseNumber": "23552525",
                    "CoverageFlag": "0",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DMD"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1005",
                    "AssociateFirstName": "D",
                    "AssociateLastName": "fse",
                    "AssociateMiddleInitial": "f",
                    "LicenseNumber": "978465464",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "APN"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1006",
                    "AssociateFirstName": "E",
                    "AssociateLastName": "kjfhkjh",
                    "AssociateMiddleInitial": "f",
                    "LicenseNumber": "797897978",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Allergy & Immunology, Allergy"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "AT"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  },
                  {
                    "@ID": "1007",
                    "AssociateFirstName": "F",
                    "AssociateLastName": "gfdg",
                    "AssociateMiddleInitial": "g",
                    "LicenseNumber": "58758696",
                    "CoverageFlag": "1",
                    "TaxIDName": "Group",
                    "AssociateSpecialty": {
                      "@ID": "0",
                      "Specialty": {
                        "SpecialtyName": "Certified First Assistant"
                      }
                    },
                    "AssociateType": {
                      "AssociateTypeDescription": "Partner"
                    },
                    "ProviderType": {
                      "ProviderTypeAbbreviation": "DDS"
                    },
                    "AssociateOther": {
                      "@ID": "1000",
                      "CoverageAvailability": "Partner"
                    }
                  }
                ],
                "Certification": [
                  {
                    "@ID": "1000",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Basic Life Support (BLS)"
                  },
                  {
                    "@ID": "1001",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
                  },
                  {
                    "@ID": "1002",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Life Support in OB (ALSO)"
                  },
                  {
                    "@ID": "1003",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
                  },
                  {
                    "@ID": "1004",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
                  },
                  {
                    "@ID": "1005",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
                  },
                  {
                    "@ID": "1006",
                    "#text": "0"
                  },
                  {
                    "@ID": "1007",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
                  },
                  {
                    "@ID": "1008",
                    "CertificationFlag": "0",
                    "CertificationDescription": "Other"
                  }
                ],
                "ProviderPracticeHours": {
                  "@ID": "1000",
                  "StartHours": {
                    "Hours": "6:30 am"
                  },
                  "EndHours": {
                    "Hours": "7:00 am"
                  },
                  "DayOfWeek": {
                    "DayOfWeekName": "Monday"
                  },
                  "HoursType": {
                    "HoursTypeDescription": "Office"
                  }
                },
                "Language": {
                  "@ID": "1000",
                  "LanguageType": "Translate",
                  "Language": {
                    "LanguageName": "Afar"
                  }
                },
                "Limitation": {
                  "@ID": "1000",
                  "AgeLimitationFlag": "0",
                  "GenderLimitation": {
                    "GenderLimitationDescription": "Male Only"
                  }
                },
                "Patient": [
                  {
                    "@ID": "1000",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients"
                    }
                  },
                  {
                    "@ID": "1001",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "All New Patients"
                    }
                  },
                  {
                    "@ID": "1003",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "Existing Patients w/ Change of Payor"
                    }
                  },
                  {
                    "@ID": "1004",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients from Physician Referral Only"
                    }
                  },
                  {
                    "@ID": "1005",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicare Patients"
                    }
                  },
                  {
                    "@ID": "1006",
                    "PatientFlag": "0",
                    "PatientType": {
                      "PatientTypeDescription": "New Medicaid Patients"
                    }
                  },
                  {
                    "@ID": "1007",
                    "PatientFlag": "1",
                    "PatientType": {
                      "PatientTypeDescription": "New Patients Varies by Health Plan"
                    }
                  }
                ],
                "AddressType": {
                  "AddressTypeDescription": "Other Practice"
                },
                "Tax": {
                  "@ID": "1000",
                  "GroupName": "testing",
                  "TaxID": "868760808",
                  "PrimaryFlag": "1",
                  "TaxType": {
                    "TaxTypeDescription": "Group"
                  }
                },
                "PracticeSpecialty": {
                  "@ID": "1000",
                  "Specialty": {
                    "SpecialtyName": "Certified First Assistant"
                  }
                },
                "PracticeAddress": [
                  {
                    "@ID": "1000",
                    "Address": "Street1",
                    "Address2": "Office",
                    "City": "hyd",
                    "County": "Barbour County",
                    "State": "AL",
                    "PostalCode": "978646413",
                    "Province": "igduhi",
                    "EmailAddress": "testt@gmail.com",
                    "Country": {
                      "CountryName": "Algeria"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Other Practice"
                    }
                  },
                  {
                    "@ID": "1001",
                    "Address": "Street1",
                    "Address2": "Office",
                    "City": "hyd",
                    "State": "AL",
                    "PostalCode": "978646413",
                    "Province": "igduhi",
                    "Country": {
                      "CountryName": "Algeria"
                    },
                    "AddressType": {
                      "AddressTypeDescription": "Mailing"
                    }
                  }
                ]
              }
            ],
            "Hospital": [
              {
                "@ID": "1000",
                "HospitalName": "Other",
                "NonAHAHospitalName": "Arkham Asylum",
                "Address": "101 Wayne Manor Rd.",
                "City": "Gotham",
                "State": "VA",
                "ZipCode": "22191",
                "PhoneNumber": "2222222222",
                "UnrestrictedPrivilegesFlag": "0",
                "PrivilegeDescription": "Temporary",
                "TemporaryPrivilegesFlag": "1",
                "StaffCategory": "Pending",
                "ApplicationDate": "2019-02-01T00:00:00",
                "FaxNumber": "9072697251",
                "HospitalAffiliationType": {
                  "HospitalAffiliationTypeDescription": "Primary"
                },
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "HospitalName": "Other",
                "NonAHAHospitalName": "Government's Hospital",
                "Address": "2105 East South Boulevard",
                "Address2": "fsgfs",
                "City": "Montgomery",
                "State": "CA",
                "ZipCode": "354456565",
                "PhoneNumber": "6545646556",
                "UnrestrictedPrivilegesFlag": "1",
                "PrivilegeDescription": "Full and unrestricted",
                "TemporaryPrivilegesFlag": "0",
                "StartDate": "2019-02-01T00:00:00",
                "StaffCategory": "Active",
                "HospitalAffiliationType": {
                  "HospitalAffiliationTypeDescription": "Secondary"
                },
                "Country": {
                  "CountryName": "United States"
                }
              }
            ],
            "Insurance": [
              {
                "@ID": "1000",
                "InsuranceCarrierName": "Acceleration National Ins Co",
                "OriginalStartDate": "2018-09-03T00:00:00",
                "StartDate": "2018-10-26T00:00:00",
                "EndDate": "2018-11-16T00:00:00",
                "SelfInsuredFlag": "0",
                "Address": "475 Metro Pl N",
                "City": "Dublin",
                "State": "AR",
                "PostalCode": "43017",
                "PolicyNumber": "978645123",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "22",
                "CoverageAmountAggregate": "55",
                "TailNoseCoverageFlag": "1",
                "UnlimitedCoverageFlag": "1",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Previous Malpractice"
                },
                "InsuranceCoverageType": {
                  "InsuranceCoverageTypeDescription": "Claims Made"
                },
                "Country": {
                  "CountryName": "United States"
                }
              },
              {
                "@ID": "1001",
                "InsuranceCarrierName": "MAG Mutual Insurance Co.",
                "StartDate": "2016-11-12T00:00:00",
                "EndDate": "2019-12-12T00:00:00",
                "SelfInsuredFlag": "1",
                "Address": "4565 Hadvogger Blvd.",
                "City": "Savannah",
                "State": "GA",
                "PostalCode": "31406",
                "PhoneNumber": "3216543123",
                "PolicyNumber": "PSL 0104058 13",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "65645",
                "CoverageAmountAggregate": "9885",
                "RetroactiveDate": "2019-11-11T00:00:00",
                "UnlimitedCoverageFlag": "1",
                "FaxNumber": "6549673165",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Current Malpractice"
                }
              },
              {
                "@ID": "1002",
                "InsuranceCarrierName": "MAG Mutual Insurance Co.",
                "StartDate": "2016-11-12T00:00:00",
                "EndDate": "2019-12-12T00:00:00",
                "SelfInsuredFlag": "1",
                "Address": "4565 Hadvogger Blvd.",
                "City": "Savannah",
                "State": "GA",
                "PostalCode": "31406",
                "PhoneNumber": "3216543123",
                "PolicyNumber": "PSL 0104058 13",
                "IndividualCoverageFlag": "1",
                "CoverageAmountOccurrence": "465454654",
                "CoverageAmountAggregate": "554",
                "RetroactiveDate": "2019-11-11T00:00:00",
                "TailNoseCoverageFlag": "0",
                "UnlimitedCoverageFlag": "1",
                "FaxNumber": "6549673165",
                "InsuranceType": {
                  "InsuranceTypeDescription": "Current Malpractice"
                }
              }
            ],
            "WorkHistory": {
              "@ID": "1000",
              "EmployerName": "rrr",
              "StartDate": "2018-07-01T00:00:00",
              "Address": "tyutyutu",
              "City": "gjtyjuyu",
              "State": "AL",
              "PostalCode": "33333333333",
              "CurrentEmployerFlag": "1",
              "StatusDescription": "Present",
              "Country": {
                "CountryName": "American Samoa"
              },
              "WorkHistoryType": {
                "WorkHistoryTypeDescription": "Current"
              }
            },
            "Reference": [
              {
                "@ID": "1000",
                "FirstName": "test",
                "LastName": "uyyt",
                "Address": "fjfm",
                "Address2": "fhjfk",
                "City": "jfjkhk",
                "State": "CO",
                "Province": "76476475",
                "PostalCode": "465474746",
                "PhoneNumber": "6867867867",
                "Title": "ttt",
                "FaxNumber": "5757576879",
                "Relationship": "tttt",
                "YearsKnown": "55",
                "MiddleName": "tt",
                "EmailAddress": "testing@gmail.com",
                "ReferenceType": {
                  "ProviderTypeAbbreviation": "MD"
                },
                "Country": {
                  "CountryName": "Anguilla"
                },
                "Specialty": {
                  "SpecialtyName": "Allergy & Immunology"
                }
              },
              {
                "@ID": "1001",
                "FirstName": "dgfdgd",
                "LastName": "fgdfg",
                "Address": "dfgdfg",
                "Address2": "dfgdfg",
                "City": "dfgdfg",
                "State": "AK",
                "Province": "dfgdf",
                "PostalCode": "222222222",
                "PhoneNumber": "4534564364",
                "FaxNumber": "4564564654",
                "EmailAddress": "rr@ee.com",
                "ReferenceType": {
                  "ProviderTypeAbbreviation": "ACU"
                },
                "Country": {
                  "CountryName": "Albania"
                }
              }
            ],
            "GraduateType": {
              "GraduateTypeDescription": "US/Canadian Graduate"
            },
            "ProviderAddress": {
              "@ID": "1000",
              "Address": "Test",
              "City": "Test",
              "State": "AZ",
              "PostalCode": "789465431",
              "EmailAddress": "Testabc@gmail.com",
              "AddressType": {
                "AddressTypeDescription": "Current Home"
              }
            },
            "ProviderCertification": [
              {
                "@ID": "1000",
                "CertificationFlag": "0",
                "CertificationDescription": "Cardio-Pulmonary Resucitation (CPR)"
              },
              {
                "@ID": "1001",
                "CertificationFlag": "0",
                "CertificationDescription": "Basic Life Support (BLS)"
              },
              {
                "@ID": "1002",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Cardiac Life Support (ACLS)"
              },
              {
                "@ID": "1003",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Life Support in OB (ALSO)"
              },
              {
                "@ID": "1004",
                "CertificationFlag": "0",
                "CertificationDescription": "Health Care Provider (Core C)"
              },
              {
                "@ID": "1005",
                "CertificationFlag": "0",
                "CertificationDescription": "Neonatal Advanced Life Support (NALS)"
              },
              {
                "@ID": "1006",
                "CertificationFlag": "0",
                "CertificationDescription": "Advanced Trauma Life Support (ATLS)"
              },
              {
                "@ID": "1007",
                "CertificationFlag": "0",
                "CertificationDescription": "Neonatal Resuscitation Program (NRS)"
              },
              {
                "@ID": "1008",
                "CertificationFlag": "0",
                "CertificationDescription": "Pediatric Advanced Life Support (PALS)"
              },
              {
                "@ID": "1009",
                "CertificationFlag": "0",
                "CertificationDescription": "Other"
              },
              {
                "@ID": "1010",
                "CertificationFlag": "0",
                "CertificationDescription": "Anesthesia Permit"
              }
            ],
            "CitizenshipCountry": {
              "CountryName": "United States"
            },
            "Military": {
              "@ID": "1000",
              "ReserveGuardFlag": "1",
              "ActiveDuty": "1"
            },
            "MedicalAssociation": [
              {
                "@ID": "1000",
                "AssociationName": "avdg",
                "AssociationType": "Network Denial",
                "GeographicRange": {
                  "GeographicRangeDescription": "Regional"
                }
              },
              {
                "@ID": "1001",
                "AssociationName": "asg",
                "AssociationType": "IPA/PHA",
                "GeographicRange": {
                  "GeographicRangeDescription": "National"
                }
              },
              {
                "@ID": "1002",
                "AssociationName": "asgsa",
                "AssociationType": "Network Denial",
                "GeographicRange": {
                  "GeographicRangeDescription": "Local"
                }
              }
            ]
          })
    }
    else {
        res.send({
            message: "Invalid CAQH ID"
        })
    }

})

// app.get('/caqh/:id' , function (req, res){

//     res.send('CAQH-Id-123456789!')
    
//     })

// require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
  console.log("Listening on Port 5000")
});



// Google Oauth Link Breakdown

//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&
//redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&
//scope=profile%20email&
//client_id=72836613325-ad2j4ooj9opj6n7lt79lv1jd6h3qahcp.apps.googleusercontent.com