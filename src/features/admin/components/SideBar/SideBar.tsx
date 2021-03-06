import { ColorBackground } from 'constants/color';
import { Fragment, useEffect, memo } from 'react';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
	useEffect(() => {});
	return (
		<Fragment>
			<aside
				id='sidebar'
				style={{ backgroundColor: ColorBackground.blue }}
				className=' w-1/2 md:w-1/6 lg:w-1/6 hidden md:block lg:block shadow'>
				<ul className=' flex flex-col'>
					<li
						style={{ backgroundColor: ColorBackground.blue }}
						className='  w-full h-full   border-b border-t border-[#f8cabe]'>
						<NavLink
							activeClassName='active'
							to='/admin/dashboard'
							className='flex py-3 px-2 text-white cursor-pointer font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
								/>
							</svg>
							<span className='mx-[10%]'>Dashboard</span>
						</NavLink>
					</li>
					<li
						style={{ backgroundColor: ColorBackground.blue }}
						className='  w-full h-full   border-b border-t border-[#f8cabe]'>
						<NavLink
							activeClassName='active'
							to='/admin/users'
							className='flex py-3 px-2 text-white cursor-pointer font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
								/>
							</svg>
							<span className='mx-[10%]'>User</span>
						</NavLink>
					</li>
					<li
						style={{ backgroundColor: ColorBackground.blue }}
						className='  w-full h-full   border-b border-t border-[#f8cabe]'>
						<NavLink
							activeClassName='active'
							to='/admin/categories'
							className='flex py-3 px-2 text-white cursor-pointer font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z'
									clipRule='evenodd'
								/>
							</svg>
							<span className='mx-[10%]'>Categories</span>
						</NavLink>
					</li>
					<li
						style={{ backgroundColor: ColorBackground.blue }}
						className=' w-full h-full   border-b border-[#f8cabe]'>
						<NavLink
							activeClassName='active'
							to='/admin/products'
							className='flex py-3 px-2 text-white cursor-pointer font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
								/>
							</svg>
							<span className='mx-[10%]'>Products</span>
						</NavLink>
					</li>
					<li
						style={{ backgroundColor: ColorBackground.blue }}
						className=' w-full h-full   border-b border-[#f8cabe]'>
						<NavLink
							activeClassName='active'
							to='/admin/orders'
							className='flex py-3 px-2 text-white cursor-pointer font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
								/>
							</svg>
							<span className='mx-[10%]'>Orders</span>
						</NavLink>
					</li>
					<li
						style={{ backgroundColor: ColorBackground.blue }}
						className=' w-full h-full   border-b border-[#f8cabe]'>
						<NavLink
							activeClassName='active'
							to='/admin/contacts'
							className='flex py-3 px-2 text-white cursor-pointer font-sans font-hairline hover:font-normal text-sm text-nav-item no-underline '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
								/>
							</svg>

							<span className='mx-[10%]'>Contacts</span>
						</NavLink>
					</li>
				</ul>
			</aside>
		</Fragment>
	);
};

export default memo(SideBar);
