import { createGenerator, defaultConfig } from '../src'

test('default', () => {
  const generator = createGenerator(defaultConfig)

  expect(generator([
    'p-1',
    'pt-2',
    'p-3',
    'pl-10px',
    'hover:p-4',
    '!p-5px',
    '!hover:px-10',
    'hover:!p-10',
    'op-10',
    'opacity-0',
    'flex',
    'text-red-300',
    'text-blue',
    'text-warn-gray',
    'text-black/10',
    'bg-teal-100/55',
    'border',
    'border-2',
    'font-mono',
    'm-auto',
    'my-auto',
    'm-[3em]',
    'sm:text-red-100',
    'md:!hidden',
    'rounded-t-sm',
    'rounded-md',
    'rounded-tr',
    'rounded-1/2',
    'rounded-rb-1/2',
    'rounded-full',
    'rounded-[4px]',
    'rounded',
    'dark:not-odd:text-red',
    'hover:not-first:checked:bg-red/10',
  ].join(' '))).toMatchSnapshot()
})
