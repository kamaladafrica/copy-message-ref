# Copy Message Ref

This is a simple Mozilla Thunderbird extension that adds a button to the message header toolbar to
copy the message refs to the clipboard. This is useful for pasting email reference.

Example:

Mario Rossi <mario.rossi@email.it>, 30/4/2020, 18:25:05, Fwd: Meeting

## Build

### Windows

Using open source 7zip https://www.7-zip.org/

```sh
$ 7z a .\copy-message-ref@kamaladafrica.xpi .\src\*
```

### *nix

Using zip

```sh
$ zip ./copy-message-ref@kamaladafrica.xpi ./src/*
```

## Installation

Install .xpi into Thunderbird as usual.
