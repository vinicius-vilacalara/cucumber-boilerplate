import checkContainsText from 'src/support/check/checkContainsText';

describe(
    'checkContainsText', () => {
        let done;
        let expectToContain;
        let expectToNotContain;

        beforeEach(() => {
            global.browser = {
                getAttribute: jest.fn((element) => {
                    if (element === 'element1') {
                        return null;
                    }

                    return '';
                }),
                getText: jest.fn(() => 'text'),
                getValue: jest.fn(() => 'value'),
            };

            expectToContain = jest.fn();
            expectToNotContain = jest.fn();

            global.expect = jest.fn(() => ({
                to: {
                    contain: expectToContain,
                    not: {
                        contain: expectToNotContain,
                    },
                },
            }));

            done = jest.fn();
        });

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element1', 'text', done);

                _expect(global.browser.getText).toHaveBeenCalledTimes(1);
                _expect(global.browser.getText)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('text');

                _expect(expectToContain).toHaveBeenCalledTimes(1);
                _expect(expectToContain).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element1', ' not', 'text', done);

                _expect(global.browser.getText).toHaveBeenCalledTimes(1);
                _expect(global.browser.getText)
                    .toHaveBeenCalledWith('element1');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('text');

                _expect(expectToNotContain).toHaveBeenCalledTimes(1);
                _expect(expectToNotContain).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText(
                    'element2',
                    'text',
                    done
                );

                _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
                _expect(global.browser.getValue)
                    .toHaveBeenCalledWith('element2');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('value');

                _expect(expectToContain).toHaveBeenCalledTimes(1);
                _expect(expectToContain).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText(
                    'element2',
                    ' not',
                    'text',
                    done
                );

                _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
                _expect(global.browser.getValue)
                    .toHaveBeenCalledWith('element2');

                _expect(global.expect).toHaveBeenCalledTimes(1);
                _expect(global.expect).toHaveBeenCalledWith('value');

                _expect(expectToNotContain).toHaveBeenCalledTimes(1);
                _expect(expectToNotContain).toHaveBeenCalledWith('text');

                _expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
