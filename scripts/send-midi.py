#!/usr/bin/python
import sys
import serial

def formatMidi(command, channel, note, value):
    first_byte = (command << 4) + channel
    print("[MIDI ->] {} {} {}".format(hex(first_byte), hex(note), hex(value)))  
    return [first_byte, note, value]


def help():
    print ("""
send-serial-midi: <device> <command> <channel> <note> <value>

Example: send-serial-midi /dev/ttyUSB0 0x9 0 127 1""")


def string_to_int(string):
    integer = None
    try:
        integer = int(string)
    except ValueError:
        pass
    try:
        integer = int(string, base=16)
    except ValueError:
        pass

    if integer is None:
        raise Exception("Cannot parse " + string)
    return integer

def main():
    import rtmidi

    midi_out = rtmidi.MidiOut()
    
    print("# Devices:")
    i = 0
    for port_name in midi_out.get_ports():
        print("[" + str(i) + "] " + port_name)
        i += 1

    device = sys.argv[1]
    midi_out.open_port(string_to_int(device))
    command = formatMidi(
        string_to_int(sys.argv[2]), 
        string_to_int(sys.argv[3]), 
        string_to_int(sys.argv[4]), 
        string_to_int(sys.argv[5])
    )
    print(command)
    midi_out.send_message(command)

if __name__ == "__main__":
    main()


