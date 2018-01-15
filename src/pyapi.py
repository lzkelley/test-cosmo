import datetime

from rpc_zmq.server import PyServer


def main():
    server = Receiver(debug=True)
    server.run(beat=0.1)


class Receiver(PyServer):

    def __init__(self, *args, **kwargs):
        print("Initializing Receiver")
        # super().__init__(*args, file=open('log.txt', 'w'), **kwargs)
        super().__init__(*args, **kwargs)
        return

    def datetime(self, args):
        print("Receiver.datetime()")
        now = str(datetime.datetime.now())
        return now


if __name__ == '__main__':
    main()
