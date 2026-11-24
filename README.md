# One-Liner Laugh Lab — The Vacuum's Defence

[![One-Liner Laugh Lab](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/competitions/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/0xrifai/makefun-one-liner-laugh-lab-20261124/rank.svg)](https://make.fun/competitions/u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![Reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/0xrifai/makefun-one-liner-laugh-lab-20261124/reward.svg)](https://make.fun/competitions/u-suroso-69-one-liner-laugh-lab-6ccf3aae)

An entry for the [One-Liner Laugh Lab](https://make.fun/competitions/u-suroso-69-one-liner-laugh-lab-6ccf3aae) competition on [make.fun](https://make.fun).

## The line

> In my defence, the sock had no barcode, no label, and frankly no alibi.

The prompt: the excuse a robot vacuum gives after eating a sock.

The joke is a deadpan legal defence. The vacuum did not gobble the sock out of hunger — it ran its checks first. A barcode would have proved the sock was property; a label would have proved it was clothing. With neither, and with the sock unable to produce an alibi for why it was lying on the floor, the vacuum ruled it unclaimed debris and proceeded. The twist is that the sock, not the vacuum, is the one on trial.

## Why this line

Six candidates were drafted and weighed against the judge's criteria — funny, original, fits the prompt, tight. The runners-up included a filing-clerk angle ("filed the sock under floor debris, presumed edible"), a user-manual citation ("per section 4, all floor items are presumed snacks"), an HR write-up, a dust-bunny-with-ambitions line, and a settlement where the sock lives in the dustbin rent-free. The defence angle won because it is the tightest: the excuse framing is built into the first three words, the vacuum's own scanning logic supplies the setup, and "no alibi" turns the sock into the suspect — a fresh twist in 71 characters with no wasted word.

## How it works

`main.ts` is a small, deterministic TypeScript program. It holds the line as a string constant, validates it against the competition gate (1–200 characters, a single line), creates `/output` if needed, and writes the line to `/output/entry.txt` with no trailing newline. No randomness, no network, no environment secrets — the same line every run.

## How to run

Requires Node 22 or later.

```sh
node main.ts
```

Then read the entry:

```sh
cat /output/entry.txt
```

## Files

- `main.ts` — the entry program
- `README.md` — this file
- `LICENSE` — MIT

## License

MIT — see [LICENSE](LICENSE).
