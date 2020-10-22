export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

export const stateGroups: StateGroup [] = [
  {
    letter: 'A',
    names: ['Architects & Surveyors', 'Air Conditioning', 'Automotive Mechanics']
  },
  {
    letter: 'B',
    names: ['Bathroom Refurbishers', 'Blinds & Curtains', 'Bricklayers', 'Builders']
  },
  {
    letter: 'C',
    names: ['Car Detailers', 'Car Servicing', 'Carpenters', 'Cleaning Services', 'Computers & Communication']
  },
  {
    letter: 'D',
    names: ['Drain & Septic']
  },
  {
    letter: 'E',
    names: ['Electricians', 'Excavation']
  },
  {
    letter: 'G',
    names: ['Gardens & Landscaping', 'Gas Specialist', 'Gates & Fencing', 'Geyser Specialists', 'Glass Fitment']
  },
  {
    letter: 'H',
    names: ['Handyman', 'Home Security']
  },
  {
    letter: 'K',
    names: ['Kitchen Refurbishment']
  },
  {
    letter: 'L',
    names: ['Locksmith']
  },
  {
    letter: 'P',
    names: ['Painters', 'Panel Beaters', 'Pavement & Driveways', 'Plumbers', 'Ponds & Water Features']
  },
  {
    letter: 'R',
    names: ['Roofing Specialists']
  },
  {
    letter: 'S',
    names: ['Sliding & Aliminium Doors', 'Swimming Pools & Pumps']
  },
  {
    letter: 'T',
    names: ['Telephones & Networking', 'Televisions & Satellites', 'Tiling Specialists']
  },
  {
    letter: 'W',
    names: ['Waterproofing & Sealing', 'Welding & Fabrication']
  }
]
