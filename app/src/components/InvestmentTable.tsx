import React from 'react';

const investments = [
  { image: '/apple.png', description: '', name: 'Apple', status: 'Active', shares: 100, currentShareValue: 51.78684 },
  { image: '/google.png', description: '', name: 'Google', status: 'Inactive', shares: 200, currentShareValue: 30.78466 },
  { image: '/facebook.png', description: '', name: 'Facebook', status: 'Active', shares: 150, currentShareValue: 42.78468 },
];

export default function InvestmentTable() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 m-40">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Investments</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the investment in your account including their name, status, share count and current share value.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add investment
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Shares
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Share value
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Total value
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {investments.map((investment) => (
                  <tr key={investment.name}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-11 w-11 flex-shrink-0">
                          <img className="h-11 w-11" src={investment.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">{investment.name}</div>
                          <div className="mt-1 text-gray-500">{investment.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{investment.shares}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {investment.status === 'Active' ?  
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span> :
                      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                        Inactive
                      </span>
                      }
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">${investment.currentShareValue}</td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">$ <span data-cy="value">{Math.round(investment.currentShareValue * investment.shares)}</span></td>
                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {investment.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>        
            <div className='px-3 py-5 text-xl'>
              Total sum: $ <span data-cy="total">{
              Math.round(investments.reduce((accumulator, current) => accumulator + current.currentShareValue * current.shares, 0))}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}  