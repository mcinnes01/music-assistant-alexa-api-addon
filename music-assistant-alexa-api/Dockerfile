ARG BUILD_FROM
FROM $BUILD_FROM

# Install requirements for addon
RUN apk add --no-cache \
    nodejs \
    npm

# Copy application files
COPY run.sh /
RUN chmod a+x /run.sh

CMD [ "/run.sh" ]