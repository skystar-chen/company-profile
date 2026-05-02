import { Button } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useState } from 'react'

const navLinks = [
  { href: '#about', label: '关于我们' },
  { href: '#services', label: '核心服务' },
  { href: '#values', label: '企业价值观' },
  { href: '#contact', label: '联系我们' },
]

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
      <div className="container h-16 flex-between">
        <a href="#" className="flex items-center gap-2.5 no-underline" aria-label="Company Profile Home">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex-center flex-shrink-0">
            <span className="text-white font-bold text-sm font-heading">CP</span>
          </div>
          <span className="text-lg font-bold text-slate-800 font-heading">Company Profile</span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 hover:text-blue-600 transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button type="primary" size="large">立即咨询</Button>
        </div>

        <button
          className="md:hidden p-2 text-slate-500 hover:text-slate-700 transition-colors rounded-lg hover:bg-slate-100 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-100 px-4 py-4 space-y-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-slate-500 py-2.5 px-2 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200 no-underline"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button type="primary" block>立即咨询</Button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
