import React from 'react'

export default function List() {

const names = [
    'John Smith', 'Emily Johnson', 'Michael Williams', 'Jessica Brown', 'Christopher Jones',
    'Sarah Garcia', 'Matthew Miller', 'Ashley Martinez', 'Daniel Davis', 'Amanda Rodriguez',
    'Joshua Hernandez', 'Megan Lopez', 'Andrew Wilson', 'Lauren Lee', 'David Clark',
    'Hannah Walker', 'James Hall', 'Victoria Young', 'Ryan Allen', 'Brittany King',
    'Justin Wright', 'Nicole Scott', 'Brandon Green', 'Rachel Adams', 'Jacob Baker',
    'Samantha Nelson', 'Nicholas Hill', 'Alexis Moore', 'Tyler Rivera', 'Jennifer Collins',
    'Jonathan Cooper', 'Elizabeth Stewart', 'Zachary Morris', 'Katherine Murphy', 'Aaron Reed',
    'Kayla Cook', 'Ethan Bell', 'Michelle Bailey', 'Dylan Gomez', 'Sophia Perez',
    'Austin Brooks', 'Kimberly Long', 'Kevin Patterson', 'Olivia Sanders', 'Jason Ross',
    'Victoria Torres', 'Brian Edwards', 'Madison Fisher', 'Adam Ward', 'Alexis Price',
    'Nathan Reed', 'Jasmine Butler', 'Christian Jenkins', 'Heather Barnes', 'Jordan Russell',
    'Taylor Howard', 'Sean Carter', 'Courtney Turner', 'Patrick Bennett', 'Brittany Reed',
    'Chad Simmons', 'Hailey Richardson', 'Derek Perry', 'Kaitlyn Hughes', 'Travis Foster',
    'Anna Jenkins', 'Blake Stewart', 'Laura Chapman', 'Cameron Ramirez', 'Amanda Black',
    'Tyler Stewart', 'Allison Parker', 'Dylan Henderson', 'Alyssa Richardson', 'Garrett Spencer',
    'Maria Watson', 'Jared Armstrong', 'Amber Kennedy', 'Bryan Ellis', 'Sydney Morris',
    'Connor Alexander', 'Brooke Rivera', 'Stephen Cole', 'Shelby Ortiz', 'Mitchell Evans',
    'Rachel Powell', 'Bradley Price', 'Jenna Adams', 'Logan Butler', 'Ariana Flores',
    'Austin Kelly', 'Madeline Jenkins', 'Spencer Morgan', 'Grace Murphy', 'Evan Sanders',
    'Molly Ward', 'Seth Edwards', 'Sydney Howard', 'Cole Barnes', 'Natalie Perry',
    'Luke Fisher', 'Sophia Ramirez', 'Chase Stevens', 'Vanessa Brooks', 'Blake Gray'
]


  return (
<ul>
    {names.map(name=><li key={name}>{name}</li>)}
</ul>
  )
}
