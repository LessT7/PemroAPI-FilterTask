import data from '../../../../public/dataUser/data.json'; // Import the data correctly
import { NextRequest, NextResponse } from 'next/server';

// API route handler
export const GET = (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');
  const city = searchParams.get('city');
  const age = searchParams.get('age');

  // TODO 1: Get all data
  if (!name && !city && !age) {
    return NextResponse.json(data);
  }

  // TODO 2: Get data by specific name
  if (name) {
    const filteredUsers = data.filter(user =>
      user.name.toLowerCase() === name.toString().toLowerCase()
    );
    return NextResponse.json(filteredUsers);
  }

  // TODO 3: Get data by city (New York)
  if (city && city.toLowerCase() === 'new york') {
    const newYorkUsers = data.filter(user => user.city.toLowerCase() === 'new york');
    return NextResponse.json(newYorkUsers);
  }

  // TODO 4: Get data by age >= 30
  if (age && !isNaN(Number(age))) {
    const ageFilteredUsers = data.filter(user => user.age >= Number(age));
    return NextResponse.json(ageFilteredUsers);
  }

  // Fallback response if no valid query parameter is provided
  return NextResponse.json({ message: 'Invalid query parameters' }, { status: 400 });
};
