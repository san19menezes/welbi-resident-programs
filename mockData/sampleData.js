export const sampleData = {
  programs: [
    {
      id: 109,
      parentId: null,
      name: 'Debate',
      location: 'Gymnasium',
      allDay: false,
      start: '2009-11-12T19:00:00.000Z',
      end: '2009-11-12T20:00:00.000Z',
      tags: ['outing'],
      createdAt: '2023-02-07T06:16:24.847Z',
      updatedAt: '2023-02-07T06:16:24.847Z',
      dimension: 'Intellectual',
      facilitators: ['Rec Aide'],
      levelOfCare: ['INDEPENDENT', 'ASSISTED'],
      hobbies: ['Debate', 'Public Speaking'],
      recurrence: null,
      isRepeated: false,
      applicantId: null,
      attendance: [
        {
          programId: 109,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 109,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 109,
          residentId: 4,
          status: 'Active',
        },
        {
          programId: 109,
          residentId: 5,
          status: 'Active',
        },
      ],
    },
    {
      id: 112,
      parentId: null,
      name: 'Holiday Celebration',
      location: 'Cafeteria',
      allDay: false,
      start: '2009-12-10T19:00:00.000Z',
      end: '2009-12-10T20:00:00.000Z',
      tags: ['special'],
      createdAt: '2023-02-07T06:16:24.910Z',
      updatedAt: '2023-02-07T06:16:24.910Z',
      dimension: 'Community',
      facilitators: ['Resident'],
      levelOfCare: ['INDEPENDENT', 'ASSISTED', 'MEMORY', 'LONGTERM'],
      hobbies: [],
      recurrence: null,
      isRepeated: false,
      applicantId: null,
      attendance: [
        {
          programId: 112,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 3,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 4,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 5,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 6,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 7,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 15,
          status: 'Active',
        },
      ],
    },
  ],
  residents: [
    {
      id: 1,
      name: 'Jeff Winger',
      firstName: 'Jeffrey',
      lastName: 'Winger',
      preferredName: 'Jeff',
      status: 'HERE',
      room: '204',
      levelOfCare: 'INDEPENDENT',
      ambulation: 'CANE',
      birthDate: '1974-11-20T07:00:00.000Z',
      moveInDate: '2009-09-17T07:00:00.000Z',
      createdAt: '2009-09-17T04:44:10.000Z',
      updatedAt: '2009-09-17T04:44:10.000Z',
      applicantId: null,
      attendance: [
        {
          programId: 109,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 114,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 117,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 118,
          residentId: 1,
          status: 'Declined',
        },
        {
          programId: 122,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 123,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 204,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 210,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 214,
          residentId: 1,
          status: 'Passive',
        },
        {
          programId: 223,
          residentId: 1,
          status: 'Declined',
        },
        {
          programId: 309,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 310,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 311,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 1191,
          residentId: 1,
          status: 'Active',
        },
        {
          programId: 1192,
          residentId: 1,
          status: 'Active',
        },
      ],
    },
    {
      id: 2,
      name: 'Britta Perry',
      firstName: 'Britta',
      lastName: 'Perry',
      preferredName: null,
      status: 'HERE',
      room: '3030-B',
      levelOfCare: 'MEMORY',
      ambulation: 'NOLIMITATIONS',
      birthDate: '1982-10-19T07:00:00.000Z',
      moveInDate: '2009-09-17T07:00:00.000Z',
      createdAt: '2009-09-17T01:41:50.000Z',
      updatedAt: '2009-09-17T01:41:51.000Z',
      applicantId: null,
      attendance: [
        {
          programId: 109,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 112,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 114,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 117,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 118,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 122,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 123,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 204,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 210,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 214,
          residentId: 2,
          status: 'Declined',
        },
        {
          programId: 223,
          residentId: 2,
          status: 'Active',
        },
        {
          programId: 1192,
          residentId: 2,
          status: 'Passive',
        },
      ],
    },
  ],
};
